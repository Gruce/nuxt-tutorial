<template>
  <NuxtLayout>

    <NuxtPage />
    <NameAndAge />
    
    <div mt="3xl" text="gray center 2xl">
      <ChatsFirst />
      <ChatsSecond />
    </div>

    <div class="flex justify-around" mt="44" text="xl ">   <!--** Who is beter ? **-->
      <NuxtLink href="/">To Hero Page</NuxtLink>          <!--<a href="/">To Hero Page</a>-->
      <NuxtLink href="/intro">To Intro Page</NuxtLink>    <!--<a href="/intro">To Intro Page</a>-->
    </div>

  </NuxtLayout>
</template>