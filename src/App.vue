<template>
  <nav class="bg-emerald-400 py-5">
    <header class="container px-6">
      <h1 class="text-[2.5rem] font-bold tracking-wider">Vue3 Marquee Text</h1>
    </header>
  </nav>
  <main class="container flex flex-col flex-col-reverse md:flex-row md:ml-auto">
    <main class="md:w-[70%]">
      <section id="about-this-project" class="px-6 py-4 mb-10">
        <h3 class="text-[2.2rem] font-medium uppercase tracking-wider">About this project</h3>
        <p class="text-[1.5rem] tracking-wider">Marquee Text Component for VueJs3</p>
      </section>
      <section id="installation" class="px-6 py-4 mb-10">
        <h3 class="text-[2.2rem] font-medium uppercase tracking-wider">Installation</h3>
        <code class="text-[1.5rem] tracking-wider">npm install vue3-marquee-text</code>
      </section>
      <section id="usage" class="px-6 py-4 mb-10">
        <h3 class="text-[2.2rem] font-medium uppercase tracking-wider mb-4">Usage</h3>
        <div class="mb-10">
          <article class="flex flex-col space-y-[1rem]">
            <h4 class="text-[1.5rem] tracking-wider font-bold text-emerald-500">💥 Global Registration.</h4>
            <code
                class="code-block bg-slate-700 block max-w-[50rem] text-white text-[1.5rem] py-6 px-4 rounded-md whitespace-pre overflow-x-scroll">
              <p><span class="text-red-600">import</span> MarqueeText <span class="text-red-600">from</span> <span
                  class="text-blue-400">"vue3-marquee-text"</span>;</p>
              <p class="mt-2">app.<span class="text-purple-400">component</span>("MarqueeText", MarqueeText);</p>
            </code>
          </article>
        </div>
        <div>
          <article class="flex flex-col space-y-[1rem]">
            <h4 class="text-[1.5rem] tracking-wider font-bold text-emerald-500">💥 Local Registration.</h4>
            <code
                class="code-block bg-slate-700 block max-w-[50rem] text-white text-[1.5rem] py-6 px-4 rounded-md whitespace-pre overflow-x-scroll">
              <p>
                <span class="text-emerald-400">&lt;script <span class="text-blue-400">setup</span>&gt;</span>
              </p>
              <p>
                <span class="text-red-600">import</span> MarqueeText <span class="text-red-600">from</span> <span
                  class="text-blue-400">"vue3-marquee-text"</span>;
              </p>
              <p>
                <span class="text-emerald-400">&lt;script/&gt;</span>
              </p>
              <br/>
              <p>
                <span class="text-emerald-400">&lt;template&gt;</span>
              </p>
              <p>
                <span class="text-emerald-400"> &lt;MarqueeText/&gt;</span>
              </p>
              <p>
                <span class="text-emerald-400">&lt;template/&gt;</span>
              </p>
            </code>
          </article>
        </div>
      </section>
      <section id="demo" class="px-6 py-4 mb-10">
        <h3 class="text-[2.2rem] font-medium uppercase tracking-wider">Demo</h3>
        <table class="table-auto mb-10">
          <thead>
          <tr>
            <th class="text-[1.5rem] tracking-wider font-bold text-emerald-500 p-4 py-6 border-b-2">Props</th>
            <th class="text-[1.5rem] tracking-wider font-bold text-emerald-500 p-4 py-6 border-b-2">Type</th>
            <th class="text-[1.5rem] tracking-wider font-bold text-emerald-500 p-4 py-6 border-b-2">Description</th>
            <th class="text-[1.5rem] tracking-wider font-bold text-emerald-500 p-4 py-6 border-b-2">Default</th>
          </tr>
          </thead>
          <tbody class="text-[1.2rem]">
          <tr class="border-b-2">
            <td class="p-4">
              <code>duration</code>
            </td>
            <td class="p-4"><code>number</code></td>
            <td class="italic p-4">Duration of the animation</td>
            <td class="p-4">10</td>
          </tr>
          <tr class="border-b-2">
            <td class="p-4">
              <code>repeat</code>
            </td>
            <td class="p-4"><code>number</code></td>
            <td class="italic p-4">Number of clone content (for short content)</td>
            <td class="p-4">2</td>
          </tr>
          <tr class="border-b-2">
            <td class="p-4">
              <code>stopOnHover</code>
            </td>
            <td class="p-4"><code>boolean</code></td>
            <td class="italic p-4">Stop animation when mouse over.</td>
            <td class="p-4">false</td>
          </tr>
          <tr class="border-b-2">
            <td class="p-4">
              <code>direction</code>
            </td>
            <td class="p-4"><code>"up" | "down" | "left" | "right"</code></td>
            <td class="italic p-4">Animation direction.</td>
            <td class="p-4">"left"</td>
          </tr>
          </tbody>
        </table>
        <div class="bottom-to-top mb-16">
          <h4 class="text-[1.5rem] tracking-wider font-bold text-emerald-500">💥 From bottom to top</h4>
          <MarqueeText class="my-6 p-6 bg-slate-700 rounded-md text-[1.2rem] max-w-[32rem]" :direction="'up'"
                       stop-on-hover>
            <span class="bg-orange-400 text-white p-2 rounded-sm inline-block m-2">HTML5</span>
            <span class="bg-blue-400 text-white p-2 rounded-sm inline-block m-2">CSS3</span>
            <span class="bg-yellow-300 text-white p-2 rounded-sm inline-block m-2">Javascript</span>
            <span class="bg-blue-600 text-white p-2 rounded-sm inline-block m-2">Typescript</span>
          </MarqueeText>
        </div>
        <div class="top-to-bottom mb-16">
          <h4 class="text-[1.5rem] tracking-wider font-bold text-emerald-500">💥 From top to bottom</h4>
          <MarqueeText class="my-6 p-6 bg-slate-700 rounded-md text-[1.2rem]" :direction="'down'" :duration="2"
                       :repeat="5">
            <span class="bg-orange-400 text-white p-2 rounded-sm inline-block m-2">HTML5</span>
            <span class="bg-blue-400 text-white p-2 rounded-sm inline-block m-2">CSS3</span>
            <span class="bg-yellow-300 text-white p-2 rounded-sm inline-block m-2">Javascript</span>
            <span class="bg-blue-600 text-white p-2 rounded-sm inline-block m-2">Typescript</span>
          </MarqueeText>
        </div>
        <div class="left-to-right mb-16">
          <h4 class="text-[1.5rem] tracking-wider font-bold text-emerald-500">💥 From left to right</h4>
          <MarqueeText class="my-6 p-6 bg-slate-700 rounded-md text-[1.2rem]" :direction="'right'" :duration="2"
                       :repeat="10">
            <span class="bg-orange-400 text-white p-2 rounded-sm inline-block m-2">HTML5</span>
            <span class="bg-blue-400 text-white p-2 rounded-sm inline-block m-2">CSS3</span>
            <span class="bg-yellow-300 text-white p-2 rounded-sm inline-block m-2">Javascript</span>
            <span class="bg-blue-600 text-white p-2 rounded-sm inline-block m-2">Typescript</span>
          </MarqueeText>
        </div>
        <div class="right-to-left mb-16">
          <h4 class="text-[1.5rem] tracking-wider font-bold text-emerald-500">💥 From right to left</h4>
          <MarqueeText class="my-6 p-6 bg-slate-700 rounded-md text-[1.2rem]" :direction="'left'" :duration="30"
                       :repeat="10">
            <span class="bg-orange-400 text-white p-2 rounded-sm inline-block m-2">HTML5</span>
            <span class="bg-blue-400 text-white p-2 rounded-sm inline-block m-2">CSS3</span>
            <span class="bg-yellow-300 text-white p-2 rounded-sm inline-block m-2">Javascript</span>
            <span class="bg-blue-600 text-white p-2 rounded-sm inline-block m-2">Typescript</span>
          </MarqueeText>
        </div>
      </section>
    </main>
    <aside class="bg-slate-200 px-6 py-4 tracking-widest md:w-[30%] md:ml-auto">
      <div class="md:sticky md:top-0">
        <h3 class="text-[2.2rem] font-medium uppercase">Table of Contents</h3>
        <ol class="list-decimal text-[2rem] font-medium px-16 py-4 text-slate-500">
          <li class="bookmark p-4 rounded-md hover:bg-emerald-400 hover:text-white hover:drop-shadow-md transition-all cursor-pointer">
            <a class="w-full h-full block" href="#about-this-project">About</a>
          </li>
          <li class="bookmark p-4 rounded-md hover:bg-emerald-400 hover:text-white hover:drop-shadow-md transition-all cursor-pointer">
            <a class="w-full h-full block" href="#installation">Installation</a>
          </li>
          <li class="bookmark p-4 rounded-md hover:bg-emerald-400 hover:text-white hover:drop-shadow-md transition-all cursor-pointer">
            <a class="w-full h-full block" href="#usage">Usage</a>
          </li>
          <li class="bookmark p-4 rounded-md hover:bg-emerald-400 hover:text-white hover:drop-shadow-md transition-all cursor-pointer">
            <a class="w-full h-full block" href="#demo">Demo</a>
          </li>
        </ol>
      </div>
    </aside>
  </main>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

#app {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(.75rem, 2.25vmin, 1.6rem);
  min-height: 100vh;
}

.code-block {
  &::-webkit-scrollbar {
    height: 0.3vh;
  }

  &::-webkit-scrollbar-thumb {
    @apply bg-slate-400;
  }
}
</style>