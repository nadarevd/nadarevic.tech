<template>
  <div class=" lg:max-w-4xl md:max-w-2xl sm:max-w-xl sm:px-0 px-4 mx-auto py-16">
    <div class="overflow-hidden">
      <div class="lg:container mx-auto grid gap-6">
        <!-- Content goes here -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div class="px-8 py-12 lg:aspect-square aspect-auto rounded-[48px] text-left bg-white">
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
          <div class="px-8 py-12 lg:aspect-square aspect-auto rounded-[48px] text-left bg-white k">
            <div class="w-full sm:px-4 flex flex-col justify-between h-full">
              <p class="break-words mt-3 text-md leading-6 text-textGray">
                The 2020 pandemic was my opportunity to fulfill my passion, learning how to professionally develop
                software while working with a logistics start-up to create industry-changing software. </p>
              <img src="../assets/loadly.svg" alt="" class="py-5 max-w-xs mx-auto">
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 ">
          <div class="rounded-[48px] text-left bg-white">
            <div class="w-full flex flex-col justify-between h-full">

              <div class="relative overflow-x-auto  rounded-[48px] text-left">
                <table class="w-full text-sm text-left text-gray-500 ">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" class="px-12 pt-6 pb-3">Time</th>
                      <th scope="col" class="px-6 pt-6 pb-3">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b ">
                      <th scope="row" class=" px-12 py-4 font-medium text-gray-900  whitespace-nowrap">2020-Present</th>
                      <td class="px-6 py-4 flex flex-col has-tooltip">
                        <h1>Loadly</h1>
                        <p>Junior Developer</p>
                        <span class='tooltip px-6 py-3 text-xs bg-gray-100 text-textBlack z-30 rounded-lg ml-32'>
                          <a href="https://loadly.ca">Check out their landing page that I made!</a>
                        </span>
                      </td>
                    </tr>
                    <tr class="bg-white border-b ">
                      <th scope="row" class="px-12 py-4 font-medium text-gray-900  whitespace-nowrap">2021-Present</th>
                      <td class="px-6 py-4 flex flex-col has-tooltip">
                        <h1>Priority Ships</h1>
                        <p>Logistics Broker</p>
                        <span class='tooltip px-6 py-3 text-xs bg-gray-100 text-textBlack z-30 rounded-lg ml-32 -mt-2'>
                          Facilitated relationships between carriers and shippers throughout each shipment step.
                        </span>
                      </td>

                    </tr>
                    <tr class="bg-white border-b">
                      <th scope="row" class="px-12 py-4 font-medium text-gray-900 ewhitespace-nowrap">September–2020</th>
                      <td class="px-6 py-4 flex flex-col has-tooltip">
                        <h1>BorderHacks Hackathon</h1>
                        <p>Lead Organizer & Workshop Facilitator</p>
                      </td>
                    </tr>
                    <tr class="bg-white border-b">
                      <th scope="row" class="px-12 py-4 font-medium text-gray-900 ewhitespace-nowrap">March–2020</th>
                      <td class="px-6 py-4 flex flex-col has-tooltip">
                        <h1>WinHacks Hackathon</h1>
                        <p>Lead Organizer & Workshop Facilitator</p>
                      </td>
                    </tr>
                    <tr class="bg-white ">
                      <th scope="row" class="px-12 py-4 font-medium text-gray-900 ewhitespace-nowrap">2016–2018</th>
                      <td class="px-6 py-4 flex flex-col">
                        <h1>University of Windsor</h1>
                        <p>Research Assistant</p>
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
</style>


<!-- <div class="px-8 py-12 md:aspect-square aspect-auto   rounded-[48px] text-left bg-white">
              <div class="w-full sm:px-4 ">
                <h1 class=" bg-clip-text bg-gradient-to-r from-[#ae54cb] to-[#3997d2] font-extrabold text-transparent text-3xl">Hey Denis,</h1>
                <h1 class="break-words leading-6 text-textGray font-medium my-1 text-xl">tell me about yourself.</h1>
                <p class="break-words mt-3 text-md md:text-xl leading-6 text-textGray">I’m a graduate from the University of Windsor with a degree in Business Administration and Computer Science. I’ve always had a passion for business ideation and software development; Oh, and I love playing piano and playing competitive games.</p>
              </div>
              
            </div> -->