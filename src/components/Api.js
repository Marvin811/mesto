class Api {
    constructor({address, token}) {
        this._address = address;
        this._token = token;
    }

    _handleResponse = (response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(`Ошибка ${response.status}`);
    }
    getUser() {
        return fetch(`${this._address}/users/me`, {
            headers: {
                authorization: this._token
            }
        }).then(this._handleResponse)
    }

    getCards() {
        return fetch(`${this._address}/cards`, {
            headers: {
                authorization: this._token
            }
        }).then(this._handleResponse)
    }
   editUser({name, info}) {
       return fetch(`${this._address}/users/me`, {
           method: 'PATCH',
           headers: {
               authorization: this._token,
               'Content-type': 'application/json'
           },
           body: JSON.stringify({
               name,
               about: info
           })
       })
           .then(this._handleResponse)
   }

    addCard({place, photo}) {
        return fetch(`${this._address}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: place ,
                link: photo
            })
        }).then(this._handleResponse)
    }
    editAvatar(avatar) {
        return fetch(`${this._address}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                avatar
            )
        })
            .then(this._handleResponse)
    }

    deleteCard(_id) {
        return fetch(`${this._address}/cards/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
            .then(this._handleResponse)
    }
    addLike(id) {
        return fetch(`${this._address}/cards/${id}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._token
            }
        })
            .then(this._handleResponse)
    }
    deleteLike(id) {
        return fetch(`${this._address}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
            .then(this._handleResponse)
    }

}

export default Api;