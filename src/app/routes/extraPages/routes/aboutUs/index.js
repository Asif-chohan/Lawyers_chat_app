import React from 'react';
import Slider from "react-slick";

import Client from './Componets/Client';
import Service from './Componets/Service';
import Team from './Componets/Team';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const services = [
  {
    id: 'infinite-widgets',
    title: 'Infinite Widgets',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    image: require('assets/images/services/macbook-40.jpg')
  }, {
    id: 'box-idea',
    title: 'Out of the Box Idea',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis scelerisque sollicitudinThis video will give you a walk through on how to create your own age verification template Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis scelerisque sollicitudin',
    image: require('assets/images/services/imac-40.jpg')
  }, {
    id: 'easy-template',
    title: 'Easy Template Builder',
    description: 'Duis a    ute irure dolor in reprehenderit in voluptate velit esse cillumtemplate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis scelerisque sollicitudin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis scelerisque sollicitudin',
    image: require('assets/images/services/office-40.jpg')
  },
];
const teams = [
  {
    name: 'Alex Dolgove',
    destination: 'Co-Founder & CEO',
    description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
    image: require('assets/images/userAvatar/alex-dolgove.png')
  },
  {
    name: 'Domnic Brown',
    destination: 'HR Manager',
    description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
    image: require('assets/images/userAvatar/domnic-brown.png')
  },
  {
    name: 'Stella Johnson',
    destination: 'BDM',
    description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
    image: require('assets/images/userAvatar/stella-johnson.png')
  },
  {
    name: 'Domnic Harris',
    destination: 'HR Manager',
    description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
    image: require('assets/images/userAvatar/domnic-harris.jpg')
  },
  {
    name: 'Garry Sobars',
    destination: 'Co-Founder & CEO',
    description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
    image: require('assets/images/userAvatar/garry-sobars.jpg')
  },
  {
    name: 'John Smith',
    destination: 'BDM',
    description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
    image: require('assets/images/userAvatar/john-smith.png')
  },
  {
    name: 'kadir',
    destination: 'BDM',
    description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
    image: require('assets/images/userAvatar/kadir-m.jpg')
  }
];
const clients = [
  {
    image: require('assets/images/clients/tasty-treats.png')
  }, {
    image: require('assets/images/clients/your-name.png')
  }, {
    image: require('assets/images/clients/velit.png')
  }, {
    image: require('assets/images/clients/bicycly-company.png')
  }, {
    image: require('assets/images/clients/crabbar.png')
  }, {
    image: require('assets/images/clients/velit.png')
  }
];


const AboutUs = ({match}) => {

  const options = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const options1 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  const options2 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };


  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <ContainerHeader
        match={match}
        styleName="text-center"
        title={<IntlMessages id="sidebar.extraPages.aboutUs"/>}/>

      <section>
        <Slider className="slick-slider-sec" {...options}>
          <Service service={services[0]}/>
          <Service service={services[1]}/>
          <Service service={services[2]}/>
        </Slider>
      </section>


      <Slider className="slick-slider-cr" {...options1}>
        <div className="slick-slide-item">
          <Team team={teams[0]}/>
        </div>
        <div className="slick-slide-item">
          <Team team={teams[1]}/>
        </div>
        <div className="slick-slide-item">
          <Team team={teams[2]}/>
        </div>
        <div className="slick-slide-item">
          <Team team={teams[3]}/>
        </div>
        <div className="slick-slide-item">
          <Team team={teams[4]}/>
        </div>
        <div className="slick-slide-item">
          <Team team={teams[5]}/>
        </div>
        <div className="slick-slide-item">
          <Team team={teams[6]}/>
        </div>
      </Slider>


      <Slider className="mb-4 slick-app-frame" {...options2}>
        <div className="slick-slide-item">
          <Client client={clients[0]}/>
        </div>
        <div className="slick-slide-item">
          <Client client={clients[1]}/>
        </div>
        <div className="slick-slide-item">
          <Client client={clients[2]}/>
        </div>
        <div className="slick-slide-item">
          <Client client={clients[0]}/>
        </div>
        <div className="slick-slide-item">
          <Client client={clients[1]}/>
        </div>
        <div className="slick-slide-item">
          <Client client={clients[2]}/>
        </div>
        <div className="slick-slide-item">
          <Client client={clients[0]}/>
        </div>
        <div className="slick-slide-item">
          <Client client={clients[1]}/>
        </div>
        <div className="slick-slide-item">
          <Client client={clients[2]}/>
        </div>
      </Slider>
    </div>
  );
};

export default AboutUs;

