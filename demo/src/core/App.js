import Media from "../util/media";
<<<<<<< HEAD
import CtMobile from "@ctmobile/react";
=======
import CtMobile from "@ctmobile/vue";
>>>>>>> develop
import Router from "../util/Router";

class App {
	initial() {
		Media.init();
		this.initCtMobile();
	}

	initCtMobile() {
		this.ctmobile = CtMobile.CtMobileFactory.create({
			supportCordova: false,
			linkCaptureReload: false,
			router: Router,
		});
	}

	getCtMobile() {
		return this.ctmobile;
	}
}

const ins = new App();

export default ins;
