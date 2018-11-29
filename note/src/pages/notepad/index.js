<<<<<<< HEAD
import React from 'react';
import CtMobile from "@ctmobile/react";
import {AppLayout, AppHeader, AppContent, AppBack} from '../../components/layout';
=======
>>>>>>> develop
import DAO from '../../util/DAO';

export default {
  data: () => {
    return {
      count: 0,
    }
  },
  methods: {
    pageCreate() {
      DAO.count().then((data) => {
        this.count = data.rows[0].count;
      });
    }
  }
}