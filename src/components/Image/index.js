import React, { useState } from 'react'
import { Wrapper } from "./style"
import Modal from "../Modal"
import Button from '../Button'
export default function Image(props) {
    const [openImage, setopenImage] = useState(false)
    const { urls = {}, links = {}, user = {} } = props.data
    const { small, regular } = urls
    const { download } = links
    const { profile_image, username, name } = user
    const onClick = () => {
        setopenImage(!openImage)
    }
    return (
        <Wrapper className='image-wrapper'>
            <img src={small} alt='' className='image' onClick={onClick} />
            <div class="bottom-left">
                <img src={profile_image.medium} className='credit-image' alt='' />
                <div className='credit'>Image by <span className='name'>{name}</span></div>
            </div>
            {
                openImage && <Modal onClose={onClick} >
                    <div class="profile">
                        <img src={profile_image.medium} className='credit-image' alt='' />
                        <div className='user-details'>
                            <div className='name'>{name}</div>
                            <div className='username'>@{username}</div>
                        </div>
                    </div>
                    <div className='big-image-wrapper'>
                        <img src={regular} alt='' className='full-image' />
                    </div>
                    <div className='button-wrapper'>
                        <a href={download} target="_blank">
                            <Button>
                                <span>Download</span>
                            </Button>
                        </a>
                    </div>
                </Modal>
            }
        </Wrapper >

    )
}

Image.defaultProps = {
    data: {
        "id": "g2E2NQ5SWSU",
        "created_at": "2020-07-01T18:31:27-04:00",
        "updated_at": "2020-07-27T21:06:32-04:00",
        "promoted_at": null,
        "width": 6016,
        "height": 4016,
        "color": "#0C0C0F",
        "description": null,
        "alt_description": "silver laptop on white table",
        "urls": {
            "raw": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1MjYzNX0",
            "full": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1MjYzNX0",
            "regular": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE1MjYzNX0",
            "small": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE1MjYzNX0",
            "thumb": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE1MjYzNX0"
        },
        "links": {
            "self": "https://api.unsplash.com/photos/g2E2NQ5SWSU",
            "html": "https://unsplash.com/photos/g2E2NQ5SWSU",
            "download": "https://unsplash.com/photos/g2E2NQ5SWSU/download",
            "download_location": "https://api.unsplash.com/photos/g2E2NQ5SWSU/download"
        },
        "categories": [],
        "likes": 285,
        "liked_by_user": false,
        "current_user_collections": [],
        "sponsorship": {
            "impression_urls": [
                "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=7348936&rnd=[INSERT_CACHEBUSTER_HERE]&gdpr=&gdpr_consent=&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
                "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=7367766&rnd=[timestamp]&gdpr=&gdpr_consent=&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
            ],
            "tagline": "Designed to be the Best",
            "tagline_url": "http://www.dell.com/xps",
            "sponsor": {
                "id": "2DC3GyeqWjI",
                "updated_at": "2020-07-29T10:14:44-04:00",
                "username": "xps",
                "name": "XPS",
                "first_name": "XPS",
                "last_name": null,
                "twitter_username": "Dell",
                "portfolio_url": "http://www.Dell.com/XPS",
                "bio": "Designed to be the best, with cutting edge technologies, exceptional build quality, unique materials and powerful features.",
                "location": null,
                "links": {
                    "self": "https://api.unsplash.com/users/xps",
                    "html": "https://unsplash.com/@xps",
                    "photos": "https://api.unsplash.com/users/xps/photos",
                    "likes": "https://api.unsplash.com/users/xps/likes",
                    "portfolio": "https://api.unsplash.com/users/xps/portfolio",
                    "following": "https://api.unsplash.com/users/xps/following",
                    "followers": "https://api.unsplash.com/users/xps/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                    "medium": "https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                    "large": "https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                },
                "instagram_username": "dell",
                "total_collections": 0,
                "total_likes": 0,
                "total_photos": 26,
                "accepted_tos": true
            }
        },
        "user": {
            "id": "2DC3GyeqWjI",
            "updated_at": "2020-07-29T10:14:44-04:00",
            "username": "xps",
            "name": "XPS",
            "first_name": "XPS",
            "last_name": null,
            "twitter_username": "Dell",
            "portfolio_url": "http://www.Dell.com/XPS",
            "bio": "Designed to be the best, with cutting edge technologies, exceptional build quality, unique materials and powerful features.",
            "location": null,
            "links": {
                "self": "https://api.unsplash.com/users/xps",
                "html": "https://unsplash.com/@xps",
                "photos": "https://api.unsplash.com/users/xps/photos",
                "likes": "https://api.unsplash.com/users/xps/likes",
                "portfolio": "https://api.unsplash.com/users/xps/portfolio",
                "following": "https://api.unsplash.com/users/xps/following",
                "followers": "https://api.unsplash.com/users/xps/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                "medium": "https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                "large": "https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "dell",
            "total_collections": 0,
            "total_likes": 0,
            "total_photos": 26,
            "accepted_tos": true
        },
        "tags": [
            {
                "type": "search",
                "title": "furniture"
            },
            {
                "type": "search",
                "title": "table"
            },
            {
                "type": "search",
                "title": "tabletop"
            }
        ]
    }
}