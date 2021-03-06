import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { loadedSuccess, loadedFail } from '../actions/photosSearch';
import setUrlPara from '../utilis/setUrlPara';

function* getPhotos(action) {
	try {
		const para = {
			method: 'flickr.photos.search',
			api_key: '2fcfa27e6e8083f9afb6bca6f8824612',
			format: 'json',
			nojsoncallback: 1,
			text: action.text,
		};
		const url = setUrlPara('https://www.flickr.com/services/rest/', para);
		const products = yield axios(url).then((res) => {
			if (res.status < 200 && res.status > 299) {
				throw new Error(`status: ${res.status}`);
			}
			return res.data.photos.photo;
		});
		yield put(loadedSuccess(products));
	} catch (e) {
		yield put(loadedFail(e.message));
	}
}

export default function* watchGetPhotos() {
	yield takeLatest('SEARCH_TEXT', getPhotos);
}
