<template>
  <div class=" lg:max-w-4xl md:max-w-2xl sm:max-w-xl sm:px-0 px-4 mx-auto py-16">
    <div class="overflow-hidden">
      <div class="lg:container mx-auto grid gap-6">
        <!-- Content goes here -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="px-8 py-12 lg:aspect-square aspect-auto rounded-[18px] text-left bg-white">
            <div class="w-full sm:px-4 flex flex-col justify-between h-full">
              <div>
                <h1
                  class=" bg-clip-text bg-gradient-to-r from-[#ae54cb] to-[#3997d2] font-extrabold text-transparent text-3xl lg:text-4xl">
                  Hey Denis,</h1>
                <h1 class="break-words leading-6 text-textGray font-medium my-1 text-xl lg:text-2xl lg:font-semibold">
                  tell me about yourself.</h1>
              </div>
              <p class="break-words mt-3 pb-5 text-md  leading-6 text-textGray">
                I’m a graduate from the University of Windsor with a degree in Business Administration and Computer
                Science. I’ve always had a passion for business ideation and software development; Oh, and I love
                playing piano and playing competitive games.</p>
            </div>
          </div>
          <div class="px-8 py-12 lg:aspect-square aspect-auto rounded-[18px] text-left bg-white k">
            <div class="w-full sm:px-4 flex flex-col justify-between h-full">
              <h1
                  class=" bg-clip-text bg-gradient-to-r from-[#ae54cb] to-[#3997d2] font-extrabold text-transparent text-3xl lg:text-4xl">
                  Here's more info about Denis N</h1>
              <p class="break-words mt-3 text-md leading-6 text-textGray">
                The 2020 pandemic was my opportunity to fulfill my passion, learning how to professionally develop
                software while working with a logistics start-up to create industry-changing software. </p>
              <img src="../assets/loadly.svg" alt="" class="py-5 max-w-xs mx-auto">
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1" v-motion :initial="{opacity: 0,y: 100,}" :visible="{opacity: 1,y: 0, transition: { duration: 400 } }">
          <div class="rounded-[18px] text-left px-12 py-8" id="gradient">
            <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 md:space-y-0">
              <!-- one -->
              <div class="flex flex-col text-textBlack md:w-auto text-center md:text-left">
                <h1 class="text-lg">Experienced in</h1>
                <div class="flex flex-col md:flex-row">
                  <h1 class="text-7xl font-semibold">5</h1>
                  <h1 class="md:text-3xl text-xl w-56 font-semibold ml-0 md:ml-2">Different programming languages.</h1>
                </div>
              </div>
              <!-- two -->
              <div class="flex flex-col text-textBlack md:w-auto text-center md:text-left">
                <h1 class="text-lg">Experienced in</h1>
                <div class="flex flex-col md:flex-row">
                  <h1 class="text-7xl font-semibold">15</h1>
                  <h1 class="md:text-3xl text-xl w-56 font-semibold ml-0 md:ml-2">Powerful tools, softwares, and libraries.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1" v-motion :initial="{opacity: 0,y: 100,}" :visible="{opacity: 1,y: 0, transition: { duration: 400 } }">
          <div class="rounded-[18px] text-left bg-white">
            <div class="w-full flex flex-col justify-between h-full">
              <div class="relative overflow-hidden  rounded-[18px] text-left">
                <table class="w-full h-auto text-sm text-left text-gray-500">
                  <thead class="text-xs text-gray-400 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" class="px-12 pt-6 pb-3">Time</th>
                      <th scope="col" class="px-6 pt-6 pb-3">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b hover:-translate-y-2 hover:scale-105 hover:shadow-md  transition-all">
                      <th scope="row" class=" px-12 py-4 font-medium text-gray-900  whitespace-nowrap">2020-Present</th>
                      <td class="px-6 py-4 flex flex-col has-tooltip">
                        <h1 class="text-textBlack font-semibold">Loadly</h1>
                        <p>Junior Developer</p>
                        <span class='tooltip px-6 py-3 text-xs bg-gray-100 text-textBlack z-30 rounded-[18px] ml-36 -mt-2'>
                          Check out their <a href="https://www.loadly.ca/" class="text-blue-500 hover:underline">landing page</a> that I made!
                        </span>
                      </td>
                    </tr>
                    <tr class="bg-white border-b hover:-translate-y-2 hover:scale-105 hover:shadow-md transition-all">
                      <th scope="row" class="px-12 py-4 font-medium text-gray-900  whitespace-nowrap">2021-Present</th>
                      <td class="px-6 py-4 flex flex-col has-tooltip">
                        <h1 class="text-textBlack font-semibold">Priority Ships</h1>
                        <p>Logistics Broker</p>
                        <span class='tooltip px-6 py-3 text-xs bg-gray-100 text-textBlack z-30 rounded-[18px] ml-32 -mt-4'>
                          Facilitated relationships between carriers and shippers throughout each shipment step.
                        </span>
                      </td>

                    </tr>
                    <tr class="bg-white border-b hover:-translate-y-2 hover:scale-105 hover:shadow-md transition-all">
                      <th scope="row" class="px-12 py-4 font-medium text-gray-900 ewhitespace-nowrap">September–2020</th>
                      <td class="has-tooltip px-6 py-4 flex flex-col has-tooltip">
                        <h1 class="text-textBlack font-semibold">BorderHacks Hackathon</h1>
                        <p>Lead Organizer</p>
                        <span class='tooltip px-6 py-3 text-xs bg-gray-100 text-textBlack z-30 rounded-[18px] ml-44 -mt-4'>
                         Organized a digital hackathon sponsored by 
                         <a href="https://www.investwindsoressex.com/" class="text-blue-500 hover:underline">IWE</a>, 
                         <a href="https://www.citywindsor.ca/" class="text-blue-500 hover:underline">the City of Windsor</a>, 
                         and many more.
                        </span>
                      </td>
                    </tr>
                    <tr class="bg-white border-b hover:-translate-y-2 hover:scale-105 hover:shadow-md transition-all">
                      <th scope="row" class="px-12 py-4 font-medium text-gray-900 ewhitespace-nowrap">March–2020</th>
                      <td class="has-tooltip px-6 py-4 flex flex-col has-tooltip">
                        <h1 class="text-textBlack font-semibold">WinHacks Hackathon</h1>
                        <p>Lead Organizer</p>
                        <span class='tooltip px-6 py-3 text-xs bg-gray-100 text-textBlack z-30 rounded-[18px] ml-44 -mt-2'>
                         Organized UWindsor's first digital hackathon with huge success.
                        </span>
                      </td>
                    </tr>
                    <tr class="bg-white border-b hover:-translate-y-2 hover:scale-105 hover:shadow-md transition-all">
                      <th scope="row" class="px-12 py-4 font-medium text-gray-900 ewhitespace-nowrap">2016–2018</th>
                      <td class="has-tooltip px-6 py-4 flex flex-col">
                        <h1 class="text-textBlack font-semibold">University of Windsor</h1>
                        <p>Research Assistant</p>
                        <span class='tooltip px-6 py-3 text-xs bg-gray-100 text-textBlack z-30 rounded-[18px] ml-44 -mt-4'>
                         Worked closely with a professor to write a business analysis case study
                        </span>
                      </td>
                    </tr>
                    <tr class="bg-white hover:-translate-y-2 hover:scale-105 hover:shadow-md transition-all">
                      <th scope="row" class="px-12 py-4 font-medium text-gray-900 ewhitespace-nowrap">2015–2020</th>
                      <td class="has-tooltip px-6 py-4 flex flex-col">
                        <h1 class="text-textBlack font-semibold">University of Windsor</h1>
                        <p>Undergraduate</p>
                        <span class='tooltip px-6 py-3 text-xs bg-gray-100 text-textBlack z-30 rounded-[18px] ml-44 -mt-4'>
                         Attended UWindsor for Business Administration & Computer Science
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#gradient {
  background-image: linear-gradient(180deg,#8be962 29%,#6cd179 87%);
}
</style> 