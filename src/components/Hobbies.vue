<template>
    <div v-motion-fade-visible-once class="py-12 ">
        <div class="flex flex-col">
            <h1 class="text-5xl font-bold">Hobbies</h1>
            <p class="text-lg font-normal mt-3 px-8">In case you want to learn more about me.</p>
        </div>
        <!-- Carousel -->
        <carousel :items-to-show="4" class="mt-12 2xl:flex mx-auto hidden w-full justify-center">
            <slide class="select-none first:ml-[50%]  mx-3 flex flex-col !w-64" v-for="card in items" :key="card">
                <div :style="{ backgroundImage: 'url(' + '/assets/' + card.img + ')' }" class=" bg-cover rounded-xl px-4 py-6 xl:w-64 lg:w-56 h-44 text-left  flex flex-col justify-between overflow-hidden" >
                    <div :style="{color: card.text_color}">
                        <a :href="card.link" target="_blank"  :class="['!text-[' + card.text_color + ']']" class="hover:underline text-xl break-words  font-bold hover:underline transition-all" >{{ card.title }}</a>
                        <p :class="['!text-[' + card.text_color + ']']" class="text-normal break-words ">{{ card.desc }}</p>
                    </div>
                </div>
            </slide>
        </carousel>

        <carousel :items-to-show="3.5" class="mt-12 2xl:hidden xl:flex hidden mx-auto w-full justify-center">
            <slide class="select-none first:ml-[50%]  mx-3 flex flex-col !w-64" v-for="card in items" :key="card">
                <div :style="{ backgroundImage: 'url(' + '/assets/' + card.img + ')' }" :class="['bg-[' + card.color + ']' ]" class="bg-cover rounded-xl px-4 py-6 xl:w-64 lg:w-56 h-44 text-left  flex flex-col justify-between overflow-hidden" >
                    <div :style="{color: card.text_color}">
                        <a :href="card.link" target="_blank"  class="text-xl break-words  font-bold hover:underline">{{ card.title }}</a>
                        <p class="text-normal break-words ">{{ card.desc }}</p>
                    </div>
                </div>
            </slide>
        </carousel>

        <div class="grid xl:hidden grid-cols-2 sm:grid-cols-4 mt-12 gap-4 px-4 sm:px-12">
            <a v-for="card in items" :key="card" class="bg-gray-100 rounded-xl px-3 py-6 w-full text-left" :style="{ backgroundImage: 'url(' + '/assets/' + card.img + ')' }">
                <div>
                    <a :href="card.link" :style="{color: card.text_color}" target="_blank" class="hover:underline text-xl break-words  text-textBlack font-bold">{{ card.title }}</a>
                    <p :style="{color: card.text_color}" class="text-normal break-words text-textBlack ">{{ card.desc }}</p>
                </div>
            </a>
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
                    title: 'Soundcloud',
                    desc: 'Checkout my piano covers.',
                    img: 'soundcloud.webp',
                    link: 'https://soundcloud.com/agustdenis',
                    text_color: '#fff',
                },
                {
                    title: 'LinkedIn',
                    desc: 'Let\'s connect.',
                    img: 'linkedin.webp',
                    link: 'https://www.linkedin.com/in/nadarevd/',
                    text_color: '#fff',
                },
                {
                    title: 'Valorant',
                    desc: 'I\'m a Sova main :)',
                    img: 'valorant.webp',
                    link: 'https://tracker.gg/valorant/profile/riot/Daeku%23NA1/overview?playlist=deathmatch&season=all',
                    text_color: '#fff',
                },
                {
                    title: 'League of Legends',
                    desc: 'I hate this game!',
                    img: 'league.webp',
                    link: 'https://na.op.gg/summoners/na/Daeku',
                    text_color: '#fff',
                },
                {
                    title: 'Anilist',
                    desc: 'Watch Monster.',
                    img: 'anilist.webp',
                    link: 'https://anilist.co/user/daekulift/',
                    text_color: '#fff',
                },
                {
                    title: 'Trakt',
                    desc: 'TV Shows and Movies.',
                    img: 'trakt.webp',
                    link: 'https://trakt.tv/users/daeku',
                    text_color: '#fff',
                },
                {
                    title: 'GitHub',
                    desc: 'Follow me!',
                    img: 'github.webp',
                    link: 'https://github.com/bigboydeku',
                    text_color: '#000',
                },
                {
                    title: 'BackLoggd',
                    desc: 'I game too :D',
                    img: 'backloggd.webp',
                    link: 'https://www.backloggd.com/u/daeku/',
                    text_color: '#fff',
                },
                {
                    title: 'Last.fm',
                    desc: 'Lots of music.',
                    img: 'lastfm.webp',
                    link: 'https://www.last.fm/user/daeku',
                    text_color: '#fff',
                },
            ]
        }
    }
};
</script>