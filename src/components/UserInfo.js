export default class UserInfo {
    constructor({name, info, avatar}) {
        // this._nameSelector = document.querySelector(nameSelector);
        // this._infoSelector = document.querySelector(infoSelector);
        // this._avatarSelector = document.querySelector(avatarSelector);
        this._name = document.querySelector(name);
        this._info = document.querySelector(info);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo() {
        this.input = {};

        this.input.avatar = this._avatar.src;
        this.input.name = this._name.textContent
        this.input.info = this._info.textContent;
        this.input.id = this._id;

        return this.input;
        // name: this._nameSelector.textContent,
        // info: this._infoSelector.textContent,
        // avatar: this._avatarSelector.url

    }

    setUserInfo({name, info}) {
        this._name.textContent = name;
        this._info.textContent = info;
    }

    setUserAvatar(avatar) {
        this._avatar.src = avatar;
    }
    setUserId(id) {
        this._id = id;
    }
}