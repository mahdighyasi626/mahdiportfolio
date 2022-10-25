<template>
  <div class="bg-blue-20 py-24">
    <div class="container grid grid-cols-12 border-b border-yellow-10 pb-20">
      <div class="col-start-1 md:col-start-3 col-span-12 md:col-span-8 px-6 md:px-0">
        <div class="max-w-sm m-auto flex flex-col gap-2">
          <p class="text-center text-yellow-10 font-medium">Contact Us</p>
          <p class="text-center text-slate-50 text-3xl font-semibold tracking-wider">Ways to contact me</p>
          <p class="text-center text-gray-400 text-sm">Start by creating a new Vite project if you don’t have one set up already. The most common approach is to
            Start by creating something.
          </p>                                                                                                                                                                                                     
        </div>
        <div class="h-12"></div>
        <div class="bg-blue-10 rounded-xl shadow-lg" data-aos="flip-up" data-aos-delay="200">
          <div class="grid md:grid-col-10 px-6 md:px-0">
            <div class="md:col-span-8 md:col-start-1 px-0 md:px-16">
              <div class="py-12 space-y-4">
              <div>
                <label for="" class="label">Name</label>
                <input type="text" class="input">
              </div>
              <div>
                <label for="" class="label">Email</label>
                <input type="text" class="input">
              </div>
              <div>
                <label for="" class="label">Message</label>
                <textarea name="" id="" rows="6" placeholder="Write your message....." class="textarea"></textarea>
              </div>
              <div class="flex justify-end">
                <button class="btn">send message</button>
              </div>
              <div class="h-6"></div>
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0 border-t border-b text-gray-200 py-4">
                  <div class="flex flex-col gap-2 border-0 md:border-r md:border-gray-200 pr-10">
                    <a href="tel:+93773020100" class="text-slate-300 text-sm">+93 (0) 783256735</a>
                    <a href="tel:+93799115566" class="text-slate-300 text-sm">+93 (0) 729041775</a>
                  </div>
                  <a href="mailto:info@jobs.af" class="text-blue-300 text-sm">mahdighyasi237@gmail.com</a>
                  <div class="border-0 md:border-l md:border-slate-300 pl-0 md:pl-10">
                    <p class="text-slate-300 text-sm tracking-tight leading-7">NETLINKS Plaza | Shar-e-Now,<br> Lane 3, Kabul, Afghanistan</p>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-3"></div>
    <div class="flex items-center justify-center">
        <span class="text-slate-300">@copyright - Mahdi Ghyasi, Software Engineer</span>
      </div>
  </div>
</template>