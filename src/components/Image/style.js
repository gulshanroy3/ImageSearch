import styled from "styled-components"

export const Wrapper = styled.div`
    &.image-wrapper{
        position:relative;
        cursor: pointer;
    margin: 12px;
        .image{
            border-radius:5%;
            width:400px;
            height:250px;
        }
        .bottom-left {
            position: absolute;
            bottom: 8px;
            left: 16px;
            display:flex;
            
            .credit{
                margin: auto 22px;
                color:#fff;
                font-weight:500;
                font-size:16px;
                .name{
                    color:#0CF3D0;
                    font-size:16px;
                }
            }
          }
          .profile{
            padding: 24px;
            display: flex;
              .user-details{
                margin-left:24px;
                .name{
                    font-size:16px;
                    font-weight:500;
                   }
                   .username{
                    font-size:12px;
                    color:grey;
                   }
              }
          
          }
          .credit-image{
            border-radius:32%;
            width: 48px;
            height: 48px;
        }
        .big-image-wrapper{
            padding: 24px;
            .full-image{
                width:800px;
                height:500px;
            }
        }
        .button-wrapper{
            padding:24px;
            display:flex;
            justify-content:center;
            a{
                text-decoration:none;
            }
        }
    }
`