import React from 'react';

const ImageList = (props) => {
    return props.images.map((image) => {
        const { description, id, urls } = image;
        return <img alt={description} key={id} src={urls.regular}></img>;
    })
    // return <div>Image List</div>
}

export default ImageList;