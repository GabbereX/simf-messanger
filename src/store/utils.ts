import { makeAutoObservable } from 'mobx'

class Utils {
	isToolbarFullWidth: boolean = false

	constructor() {
		makeAutoObservable(this)
	}

	setIsToolbarFullWidthToggle() {
		this.isToolbarFullWidth = !this.isToolbarFullWidth
	}
}

const classInstance = new Utils()

export default classInstance
