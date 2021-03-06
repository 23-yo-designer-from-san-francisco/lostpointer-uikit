import { Component } from 'components/Component/component';

import { IAlbum } from 'types/IAlbum';

import AlbumTemplate from './topalbum.hbs';
import './topalbum.scss';

export class TopAlbum<
    TAlbum extends IAlbum = IAlbum
> extends Component<TAlbum> {
    constructor(props) {
        super(props);
    }

    render() {
        return AlbumTemplate(this.props);
    }
}
