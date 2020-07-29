import React, { Component, useState, useEffect } from 'react'
import Styled from "styled-components"
import SearchBar from "../../components/SearchBar"
import Image from "../../components/Image"
import { defaultResponse } from "./util"
import axios from "axios"
import Button from '../../components/Button'
import { debounce } from 'throttle-debounce';
const Wrapper = Styled.div`
width: 100%;
.title{
    font-size: 28px;
    text-align: center;
    padding: 24px;
}
.option-wraapper{
    .main-image-wrapper{
        display:flex;
        flex-wrap:wrap;
        margin-top:48px;
    }
    .eventTask{
        background-color:  rgb(0, 157, 230);
        border: 1px solid  rgb(0, 157, 230);
        color: white;
        padding: 10px 24px;
        cursor: pointer;
        /* width: 50%; */
        display: block;
        border-radius: 8px;
    &:hover{
        background-color:  rgb(0, 157, 250);
        border: 1px solid  rgb(0, 157, 250);
    }
    }
}
.load-more-button-wrapper{
    display:flex;
    justify-content:center;
}


`
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageData: {},
            page: 1,
            query: '',
            apicalling: false
        }
        this.getImage = debounce(300, this.getImage);
    }
    handleSearch = (value) => {

        if (value === '') {
            this.setState({ imageData: {}, page: 1 })
        }
        else {
            //call API
            this.getImage(value)
        }
    }
    getImage = (value) => {
        const { page, imageData } = this.state
        let _imageData = JSON.parse(JSON.stringify(imageData))
        this.setState({
            apicalling: true
        })
        axios.get(`https://api.unsplash.com/search/photos/?client_id=ZZLZpBJyPtjmtUjZ2mqzRXZj70PV5-aupd2wu29_eyI&query=${value}&per_page=9&page=${page}`).then(res => {
            if (_imageData && _imageData.results && _imageData.results.length !== 0) {

                let _re = [..._imageData.results, ...res.data.results]
                _imageData.results = _re
            }
            else {
                _imageData = res.data
            }
            this.setState({
                imageData: _imageData,
                page: res.data.results.length > 0 ? page + 1 : 1,
                query: value,
                apicalling: false
            })
            console.log(res)
        }).catch((err) => {
            console.log(err)
            this.setState({
                apicalling: false
            })
        })
    }
    render() {
        const { imageData, query, apicalling } = this.state;
        return (
            <Wrapper>
                <div className='title'>Razorthink Assigment</div>
                <div className='option-wraapper'>
                    <SearchBar placeHolderText='Search for Images here' handleSearch={this.handleSearch} />
                    <div class='main-image-wrapper'>
                        {
                            imageData && imageData.results ? imageData.results.length === 0 ? <div>no image found</div> : <RenderImages imageData={imageData} /> : null
                        }
                    </div>
                    {
                        imageData && imageData.results && imageData.results.length !== 0 && <div className='load-more-button-wrapper'>
                            <Button onClick={() => this.getImage(query)} isLoader={apicalling} disable={imageData.total <= imageData.results.length || apicalling}>
                                <span>Load more</span>
                            </Button>
                        </div>
                    }
                </div>
            </Wrapper>
        )
    }
}

export default (Home)

function RenderImages(props) {
    const { imageData } = props
    const [imageDataLocal, setimageDataLocal] = useState(imageData)
    useEffect(() => {
        setimageDataLocal(imageData)
    }, [imageData])
    return (
        imageDataLocal && imageDataLocal.results && imageDataLocal.results.map(eachData => {
            return (
                <Image data={eachData} />
            )
        })
    )

}