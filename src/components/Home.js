import React from 'react'
import Footer from "./Footer"


function Home() {
  return (
    <div>
        <h1>Home</h1> 
        <h2>Home Users </h2> 
        <div>
        <img className='img-home' src={require('./images/User research-cuate.png')} alt=' ' />
        <img className='img-home' src={require('./images/Job hunt-cuate.png')} alt=' ' />
        <img className='img-home' src={require('./images/Job hunt-pana.png')} alt=' '/>
        </div>
        <p className='home-p'>
        While users in the developed world can choose to adopt the technology that suits their needs, the emergent users cannot afford this luxury, hence, they adapt themselves to the technology that is readily available. When technology is designed, such as the mobile-phone technology, it is an implicit assumption that it would be adopted by the emergent users in due course. However, such user groups have different needs, and they follow different usage patterns as compared to users from the developed world. 
        </p>
        <h2>Home Products </h2> 
        <div>
        <img className='img-home' src={require('./images/Ecommerce web page-pana.png')} alt=' '/>
        <img className='img-home' src={require('./images/Ecommerce web page-cuate.png')} alt=' '/>
        <img className='img-home' src={require('./images/Ecommerce web page-amico.png')} alt=' '/>
        </div>
        <p className='home-p'>
        US National products are formatted to WMO standards per WMO Pub 386, but include an AWIPS ID field on the line immediately following the WMO header. This field is six bytes in length consisting of four to six left-justified alpha-numeric characters and spaces to fill to the six byte field length where necessary. The first three characters of the AWIPS ID are the Category (CAT) Code and identify a description of the product content. 
        </p>
        <Footer />
    </div>
  )
}

export default Home