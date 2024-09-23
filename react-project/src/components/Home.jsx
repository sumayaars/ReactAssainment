import React from 'react'
import Card from './Card'
import Nevbar from './Nevbar'
import Footer from './Footer'

export default function Home() {

const items=[
    {
        "imageSource": "https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Antibiotics",
        "desc": "Medications used to treat bacterial infections by killing or inhibiting the growth of bacteria."
    },
    {
        "imageSource": "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Analgesics",
        "desc": " Pain relievers that help alleviate mild to moderate pain, such as headaches or muscle aches."
    },
    {
        "imageSource": "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Antidepressants",
        "desc": "Drugs used to treat depression and anxiety disorders by balancing chemicals in the brain."
    },
    {
        "imageSource": "https://media.istockphoto.com/id/1368429013/photo/3d-render-pharmaceutical-manufacture-background-with-glass-bottles-with-clear-liquid-on.jpg?s=1024x1024&w=is&k=20&c=moWSLnfvZQrYO4s-IoNrzSCkOcB2PJFJBe9rUtjclA8=",
        "title": "Vaccines",
        "desc": "Biological preparations that provide immunity against specific infectious diseases by stimulating the immune system."
    },
    {
        "imageSource": "https://images.pexels.com/photos/51929/medications-cure-tablets-pharmacy-51929.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Antipyretics",
        "desc": "Fever reducers that lower body temperature in cases of fever, often used for pain relief as well."
    }

]

  return (
    <>
    <Nevbar/>
    <div className='text-center font-bold text-3xl mt-20'>Types of Medicines</div>
    <div className='flex gap-6 flex-wrap mt-5 '>

       { items.map((singleItem,index) => (
          <Card key={index} data={singleItem}/>
       ))
    }

    </div>
    <Footer/>
    </>
  )
}
