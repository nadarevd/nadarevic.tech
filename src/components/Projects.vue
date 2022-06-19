<template>
    <div v-motion-fade-visible-once class="py-12 ">
        <div class="flex flex-col">
            <h1 class="text-5xl font-bold">Projects</h1>
            <p class="text-lg font-normal mt-3 px-8">A little bit of everything about Computer Science; AI, Web
                development, Games; you name it, basically.</p>
        </div>
        <!-- Carousel -->
        <carousel :items-to-show="4.4" class="mt-12 2xl:flex mx-auto hidden w-full justify-center">
            <slide class="select-none first:ml-[50%]  mx-3 flex flex-col !w-64" v-for="card in items" :key="card">
                <div class=" rounded-xl px-4 py-6 xl:w-64 lg:w-56 h-96 text-left bg-white flex flex-col justify-between overflow-hidden">
                    <div class="">
                        <a :href="card.link" target="_blank" class="text-xl hover:underline break-words  text-textBlack font-bold">{{ card.title }}</a>
                        <p class="text-normal break-words text-textBlack ">{{ card.desc }}</p>
                    </div>
                    <img :src="'/assets/' + card.img"  alt="" class=" relative block select-none " :class="['scale-['+card.scale+']', 'left-'+card.position.x, 'top-'+card.position.y]">
                </div>
            </slide>
        </carousel>

        <carousel :items-to-show="3.5" class="mt-12 2xl:hidden xl:flex hidden mx-auto w-full justify-center">
            <slide class="select-none first:ml-[50%]  mx-3 flex flex-col !w-64" v-for="card in items" :key="card">
                <div class=" rounded-xl px-4 py-6 xl:w-64 lg:w-56 h-96 text-left bg-white flex flex-col justify-between overflow-hidden">
                    <div class="">
                        <a :href="card.link" target="_blank"  class="text-xl hover:underline break-words  text-textBlack font-bold">{{ card.title }}</a>
                        <p class="text-normal break-words text-textBlack ">{{ card.desc }}</p>
                    </div>
                    <img :src="'/assets/' + card.img"  alt="" class=" relative block select-none" :class="['!scale-['+card.scale+']', 'left-'+card.position.x, 'top-'+card.position.y]">
                </div>
            </slide>
        </carousel>

        <div class="max-w-5xl mx-auto grid xl:hidden md:grid-cols-3 xs:grid-cols-2 grid-cols-1 mt-12 gap-4 px-4 sm:px-12">
            <div v-for="card in items" :key="card" class="bg-gray-100 rounded-xl px-3 py-6 w-full text-left flex flex-col justify-between h-64 overflow-hidden">
                <div>
                    <a target="_blank" :href="card.link" class="text-xl hover:underline break-words text-textBlack font-bold">{{ card.title }}</a>
                    <p class="text-normal break-words text-textBlack ">{{ card.desc }}</p>
                    <img :src="'/assets/' + card.img"  alt="" class="  block select-none scale-75 mx-auto relative xl:-top-12" :class="[ 'left-'+card.position.x, 'top-'+card.position.y]"/>
                </div>
            </div>
            <!-- {{card.img}} -->
        </div>
    </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    name: 'App',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            items: [
                {
                    title: 'Loadly',
                    desc: 'Revolutionizing Freight.',
                    img: 'load_list.svg',
                    link: 'https://www.loadly.ca',
                    scale: '1.9',
                    position: {
                        x: '20',
                        y: '20'
                    }
                },
                { 
                    title: 'AI Driving', 
                    desc: 'Neural Network Research.',
                    img:'unity.svg',
                    link: 'https://github.com/bigboydeku/Self-Driving',
                    scale: '1',
                    position: {
                        x: '0',
                        y: '20'
                    }
                },
                { 
                    title: 'Pokemall', 
                    desc: 'A modern wiki for a classic world.',
                    img:'pokemall.webp',
                    link: 'https://github.com/bigboydeku/pokemall',
                    scale: '2',
                    position: {
                        x: '',
                        y: ''
                    }
                },
                { 
                    title: 'Googler', 
                    desc: 'UWindsor\'s Google DSC helper.',
                    img:'googler.webp',
                    link: 'https://gdsc.community.dev/university-of-windsor/',
                    scale: '1.3',
                    position: {
                        x: '0',
                        y: '20'
                    }
                },
                { 
                    title: 'Pokebattles', 
                    desc: 'Java sockets and pokemon.',
                    img:'pokemon.svg',
                    link: 'https://github.com/bigboydeku/Pokemon-Server',
                    scale: '',
                    position: {
                        x: '',
                        y: ''
                    }
                },
                { 
                    title: 'Wizard\'s Hat', 
                    desc: 'A Unity 2.5D Sidescroller Adventure.',
                    img:'wizard.webp',
                    link: 'https://github.com/bigboydeku/The-Wizards-Hat',
                    scale: '',
                    position: {
                        x: '',
                        y: ''
                    }
                },
                { 
                    title: 'WinBot', 
                    desc: 'A Hackathon Bot.',
                    img:'winhacks.webp',
                    link: 'https://github.com/bigboydeku/winhacks-bot',
                    scale: '2',
                    position: {
                        x: '',
                        y: ''
                    }
                },
                { 
                    title: 'Border Bot', 
                    desc: 'An even better hackathon bot.',
                    img:'bh.webp',
                    link: 'https://www.borderhacks.com/',
                    scale: '2',
                    position: {
                        x: '',
                        y: '-20'
                    }
                },
                { 
                    title: 'Pokemon', 
                    desc: 'My first coding project from highschool.',
                    img:'python.webp',
                    link: 'https://github.com/bigboydeku/Pokemon-on-Python',
                    scale: '',
                    position: {
                        x: '',
                        y: ''
                    }
                },
            ]
        }
    }
};
</script>