<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex flex-col md:items-center md:justify-between lg:px-8">
      <div class="mt-8 md:order-2">
        <p class="text-center text-base text-gray-400">
          &copy; 2022 Denis Nadarevic. All rights reserved.
        </p>
      </div>
      <div class="border-b lg:text-left border-gray-200 py-8 lg:flex lg:items-center lg:justify-between md:mt-0 mt-12 w-full">
        <div>
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Contact
          </h3>
          <p class="mt-2 text-base text-gray-500">
            I'll get back to you as soon as possible!
          </p>
        </div>
        <form class="mt-4 sm:flex sm:max-w-md lg:mt-0 mx-auto lg:mx-0 justify-center">
          <label for="email-address" class="sr-only">Email address</label>
        
          <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button type="submit" class="w-full bg-slateGray border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slateGray">
              <a href="mailto:bosdenis@hotmail.com">Send Me an Email</a> 
            </button>
          </div>
        </form>
      </div>
    </div>
  </footer>
</template>

<script>
</script>