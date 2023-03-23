import { makeAutoObservable } from 'mobx'

class UtilsStore {
	isToolbarFullWidth: boolean = false

	constructor() {
		makeAutoObservable(this)
	}

	setIsToolbarFullWidthToggle() {
		this.isToolbarFullWidth = !this.isToolbarFullWidth
	}
}

const classInstance = new UtilsStore()

export default classInstance
