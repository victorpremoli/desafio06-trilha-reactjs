import { Box, Image, Text } from '@chakra-ui/react';

import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/swiper.min.css";
import "swiper/components/zoom/zoom.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


import SwiperCore, {
  Navigation, Pagination, Keyboard, Autoplay
} from 'swiper/core';

SwiperCore.use([Autoplay, Navigation, Pagination, Keyboard]);

export function Slide() {
  return (
    <Box width='1240px' height='450px' marginX='auto' marginBottom='120px'>
      <Swiper
        autoplay={{
          "delay": 4000,
          "disableOnInteraction": false
        }}
        navigation={false}
        cssMode={true}
        pagination={{
          "clickable": true,

        }}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            width='100%'
            height='100%'
            objectFit='cover'
            src='https://images.unsplash.com/photo-1493707553966-283afac8c358?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          />
          <Text position='absolute' fontWeight='bold' fontSize='48px' color='#F5F8FA'>

            EUROPA
            <br />
            <Text fontSize='24px'>
              O continente mais antigo.
            </Text>
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width='100%'
            height='100%'
            objectFit='cover'
            src='https://images.unsplash.com/photo-1493707553966-283afac8c358?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          />
          <Text position='absolute' fontWeight='bold' fontSize='48px' color='#F5F8FA'>

            EUROPA
            <br />
            <Text fontSize='24px'>
              O continente mais antigo.
            </Text>
          </Text>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}