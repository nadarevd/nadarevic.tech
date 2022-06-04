<template>
    <header class="bg-slateGray py-3 ">
        <nav class="max-w-7xl mx-auto lg:px-8" aria-label="Top">
            <div class="w-full flex items-center justify-center">
                <div class="flex font-light items-center justify-center ">
                    <a href="#" class="text-[#d5d5d6] mx-6 hidden lg:block">
                        <img src="/assets/logo.svg" class="w-4 h-4" alt="">
                    </a>
                    <div class="hidden lg:flex items-center">
                        <a href="#home" class="text-xs font-light text-[#d5d5d6] hover:text-indigo-50 mx-6" key="Solutions">Home</a>
                        <a href="#about" class="text-xs font-light text-[#d5d5d6] hover:text-indigo-50 mx-6" key="Pricing">About</a>
                        <a href="#projects" class="text-xs font-light text-[#d5d5d6] hover:text-indigo-50 mx-6" key="Docs">Projects</a>
                        <a href="#hobbies" class="text-xs font-light text-[#d5d5d6] hover:text-indigo-50 mx-6" key="Docs">Hobbies</a>
                        <a href="mailto:bosdenis@hotmail.com" class="has-tooltip inline-block px-4 border border-transparent rounded-md text-base text-white h-full mx-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#d5d5d6" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <span class='tooltip rounded p-1  text-xs bg-gray-100 text-gray-500 mt-3 -ml-4'>Contact Me</span>
                        </a>
                        <a href="https://ko-fi.com/nadarevic" class="has-tooltip inline-block px-4 border border-transparent rounded-md text-base text-white mx-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#13c3ff" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            <span class='tooltip rounded p-1  text-xs bg-gray-100 text-[#13c3ff] mt-3 -ml-4'>Buy me a Coffee</span>
                        </a>
                    </div>
                </div>
            </div>
            <!-- Mobile -->
            <div class="flex flex-row lg:hidden">
                <button type="button" class="fixed pl-8 lg:hidden text-gray-400" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class=" h-5 w-5" v-if="!navFlag" @click="toggleNav()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg class=" h-5 w-5" v-else @click="toggleNav()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div class="mx-auto">
                    <img src="/assets/logo.svg" class="w-5 h-5" alt="">
                </div>
            </div>
            
            <div class="flex flex-col lg:hidden px-10 border-t border-gray-500 mt-2 " v-if="navFlag">
                <div class="flex flex-col w-full">
                    <a href="#home" @click="navFlag = !navFlag" class="text-sm font-light py-4 text-[#d5d5d6] hover:text-indigo-50 text-left border-b border-gray-500" key="Solutions">Home</a>
                    <a href="#about" @click="navFlag = !navFlag"  class="text-sm font-light py-4 text-[#d5d5d6] hover:text-indigo-50 text-left border-b border-gray-500" key="Pricing">About</a>
                    <a href="#projects" @click="navFlag = !navFlag"  class="text-sm font-light py-4 text-[#d5d5d6] hover:text-indigo-50 text-left border-b border-gray-500" key="Docs">Projects</a>
                    <a href="#hobbies" @click="navFlag = !navFlag"  class="text-sm font-light py-4 text-[#d5d5d6] hover:text-indigo-50 text-left border-b border-gray-500" key="Docs">Hobbies</a>
                    <div class="flex flex-row space-x-4 py-4">
                        <a href="mailto:bosdenis@hotmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#d5d5d6" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#d5d5d6" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>

</template>

<script>
export default {
    data() {
        return {
            navFlag: false
        }
    },
    methods: {
        toggleNav() {
            this.navFlag = !this.navFlag
        }
    }
}
</script>

<style>

</style>