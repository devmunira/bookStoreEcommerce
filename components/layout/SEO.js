import React from 'react'

const SEO = ({title,description,url,twitterCard,image}) => {
  return (
    <>
                <meta
                    name="description"
                    content={description}/>
                <meta
                    property="og:title"
                    content={title}/>
                <meta
                    property="og:description"
                    content={description}/>
                <meta property="og:url" content={url}/>

                <meta name="twitter:card" content={twitterCard}/>
                <meta
                    name="twitter:title"
                    content={title}/>
                <meta
                    name="twitter:description"
                    content={description}/>
                <meta
                    name="twitter:image"
                    content={image}/>
                <meta
                    name="og:image"
                    content={image}/>
                <meta name="viewport" content="width=device-width,initial-scale=1"></meta>

    </>
  )
}

export default SEO