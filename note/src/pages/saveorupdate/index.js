import moment from 'moment';
import uuidv1 from 'uuid/v1';
<<<<<<< HEAD
import CtMobile from "@ctmobile/react";
import {AppLayout, AppHeader, AppContent, AppFooter, AppBack} from '../../components/layout';
=======
>>>>>>> develop
import DAO from '../../util/DAO';

// export default class extends CtMobile.Page.WrappedPage {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       isload: false
//     };
//     this.request = {};
//   }
//
//   pageAfterShow() {
//     this.request = this.props.parent.getRequest();
//     this.setState({
//       isload: true,
//     })
//   }
//
//   onSave = () => {
//     if (!this.state.isload) return;
//     if (this.state.value) {
//       const info = this.state.value.trim();
//       const createTime = moment().format('YYYY年MM月DD HH:mm:ss');
//       const {id = uuidv1()} = this.request.bundle || {};
//       const values = {
//         id,
//         info,
//         title: info.substring(0, 100),
//         createTime
//       };
//
//       let promise;
//       if (this.request.requestCode === 'update') {
//         promise = DAO.update(values);
//       } else {
//         promise = DAO.save(values);
//       }
//
//       promise.then(() => {
//         const request = this.props.parent.getRequest();
//         this.props.parent.setResult(request.requestCode, values);
//         this.props.parent.over();
//       })
//     } else {
//       const request = this.props.parent.getRequest();
//       this.props.parent.setResult(request.requestCode, '');
//       this.props.parent.over();
//     }
//   };
//
//   render() {
//     const {createTime = moment().format('YYYY年MM月DD HH:mm:ss'), info = ''} = this.request.bundle || {};
//
//     return (
//       <React.Fragment>
//         <AppLayout>
//           <AppHeader>
//             <div className="TimeBack">
//               <AppBack/>
//               <span className="time">{createTime}</span>
//             </div>
//           </AppHeader>
//           <AppContent>
//             {this.state.isload ? (
//               <textarea autoFocus defaultValue={info} className="AppTextArea" onChange={(e) => {
//                 this.setState({
//                   value: e.target.value
//                 });
//               }}/>
//             ) : null}
//           </AppContent>
//           <AppFooter>
//             <div className="button" onClick={this.onSave}>保存</div>
//           </AppFooter>
//         </AppLayout>
//       </React.Fragment>
//     );
//   }
// };

export default {
  data: () => {
    return {
      value: '',
      isload: false,
      createTime: '',
    }
  },
  methods: {
    pageCreate() {
      this.request = {};
    },
    pageAfterShow() {
      this.request = this.$parent.getRequest();
      const {createTime = moment().format('YYYY年MM月DD HH:mm:ss'), info = ''} = this.request.bundle || {};
      this.createTime = createTime;
      this.value = info;
      this.isload = true;
    },
    onSave() {
      if (!this.isload) return;
      if (this.value) {
        const info = this.value.trim();
        const createTime = moment().format('YYYY年MM月DD HH:mm:ss');
        const {id = uuidv1()} = this.request.bundle || {};
        const values = {
          id,
          info,
          title: info.substring(0, 100),
          createTime
        };

        let promise;
        if (this.request.requestCode === 'update') {
          promise = DAO.update(values);
        } else {
          promise = DAO.save(values);
        }

        promise.then(() => {
          const request = this.$parent.getRequest();
          this.$parent.setResult(request.requestCode, values);
          this.$parent.over();
        })
      } else {
        const request = this.$parent.getRequest();
        this.$parent.setResult(request.requestCode, '');
        this.$parent.over();
      }
    }
  }
}