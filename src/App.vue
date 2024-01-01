<script setup>
  import { ref, onMounted } from 'vue'
  import AppLogo from './components/AppLogo.vue';
  const months = ['January', 'February', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const monthIndex = new Date().getMonth()
  const year = new Date().getFullYear()
  const day = new Date().getDate()
  const message = ref([])
  const botResponse = ref(['Hi my name is Lucinda. How can I help you today?'])
  const chatboxToggled = ref(false)
  const chatNotification = ref(false)
  function openChatBox() {
    chatboxToggled.value = true
  }
  function closeChatBox() {
    chatboxToggled.value = false
  }
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')
  onMounted(() => {
    chatNotification.value = true
    setTimeout(() => {
      chatNotification.value = false
    }, 10000)
  })
</script>

<template>
  <section class="grid grid-cols-[18%_60%_22%] bg-primary dark:bg-primary-dark h-screen overflow-clip">
    <aside class="dark:bg-aside-dark rounded-r-[40px] bg-aside py-8">
      <div class="px-8">
        <div class="flex gap-2 items-center mb-4">
          <div
            class="relative w-8 h-8 before:content-string before:absolute before:w-full before:aspect-square before:inset-0 before:bg-accent before:rounded-full before:-z-10 isolate flex justify-center items-center">
            <AppLogo class="w-4 fill-white" />

          </div>
          <div class="font-medium text-lg dark:text-white">
            AfriSchool
          </div>
        </div>
        <div class="flex flex-col gap-4 py-4">

          <div class="flex gap-4 items-center bg-accent rounded px-4 py-2">
            <span>
              <svg class="w-6" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.25 0.875H2.75C2.25289 0.875571 1.77631 1.0733 1.42481 1.42481C1.0733 1.77631 0.875571 2.25289 0.875 2.75V25.25C0.875571 25.7471 1.0733 26.2237 1.42481 26.5752C1.77631 26.9267 2.25289 27.1244 2.75 27.125H25.25C25.7471 27.1244 26.2237 26.9267 26.5752 26.5752C26.9267 26.2237 27.1244 25.7471 27.125 25.25V2.75C27.1244 2.25289 26.9267 1.77631 26.5752 1.42481C26.2237 1.0733 25.7471 0.875571 25.25 0.875ZM25.25 12.125H20.5625V2.75H25.25V12.125ZM14 2.75H18.6875V12.125H14V2.75ZM12.125 2.75V17.75H2.75V2.75H12.125ZM2.75 19.625H12.125V25.25H2.75V19.625ZM14 25.25V14H25.25V25.25H14Z"
                  fill="white" />
              </svg>
            </span>
            <span class="text-white">
              Dashboard
            </span>
          </div>
          <div class="flex gap-4 items-center  px-4 py-2">
            <span>
              <svg class="w-6" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.8748 6.125H27.5V3.875H16.6252L12.7256 0.95C12.3355 0.658601 11.8618 0.50079 11.3748 0.5H2.75V2.75H11.3748L15.8748 6.125ZM2.75 27.5H25.25C25.8465 27.4994 26.4185 27.2621 26.8403 26.8403C27.2621 26.4185 27.4994 25.8465 27.5 25.25V11.75C27.4994 11.1535 27.2621 10.5815 26.8403 10.1597C26.4185 9.73788 25.8465 9.50063 25.25 9.5H14.3752L10.4756 6.575C10.0855 6.2836 9.61176 6.12579 9.12481 6.125H2.75C2.15345 6.12563 1.58152 6.36288 1.1597 6.7847C0.737879 7.20652 0.500625 7.77845 0.5 8.375V25.25C0.500625 25.8465 0.737879 26.4185 1.1597 26.8403C1.58152 27.2621 2.15345 27.4994 2.75 27.5ZM2.74831 8.375H9.12481L13.6248 11.75H25.25V25.25H2.75L2.74831 8.375Z"
                  fill="#F36C33" />
              </svg>
            </span>
            <span class="dark:text-white text-black">
              Courses
            </span>
          </div>
          <div class="flex gap-4 items-center  px-4 py-2">
            <span>
              <svg class="w-6" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.25 2.5H20.75V0.25H18.5V2.5H9.5V0.25H7.25V2.5H2.75C2.15349 2.50074 1.58163 2.73804 1.15983 3.15983C0.738036 3.58163 0.500744 4.15349 0.5 4.75V27.25C0.500744 27.8465 0.738036 28.4184 1.15983 28.8402C1.58163 29.262 2.15349 29.4993 2.75 29.5H25.25C25.8465 29.4993 26.4184 29.262 26.8402 28.8402C27.262 28.4184 27.4993 27.8465 27.5 27.25V4.75C27.4993 4.15349 27.262 3.58163 26.8402 3.15983C26.4184 2.73804 25.8465 2.50074 25.25 2.5ZM2.75 4.75H7.25V7H9.5V4.75H18.5V7H20.75V4.75H25.25V9.25H2.75V4.75ZM2.75 11.5H8.375V18.25H2.75V11.5ZM17.375 27.25H10.625V20.5H17.375V27.25ZM17.375 18.25H10.625V11.5H17.375V18.25ZM19.625 27.25V20.5H25.25L25.2514 27.25H19.625Z"
                  fill="#F36C33" />
              </svg>
            </span>
            <span class="dark:text-white text-black">
              Calender
            </span>
          </div>
          <div class="flex gap-4 items-center  px-4 py-2">
            <span>
              <svg class="w-6" viewBox="0 0 21 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.25 2.875V24.9141L11.3719 21.4363L10.5 21.0003L9.62813 21.4363L2.75 24.9141V2.875H18.25ZM18.25 0.9375H2.75C2.23614 0.9375 1.74333 1.14163 1.37998 1.50498C1.01663 1.86833 0.8125 2.36114 0.8125 2.875V28.0625L10.5 23.2188L20.1875 28.0625V2.875C20.1875 2.36114 19.9834 1.86833 19.62 1.50498C19.2567 1.14163 18.7639 0.9375 18.25 0.9375Z"
                  fill="#F36C33" />
              </svg>
            </span>
            <span class="dark:text-white text-black">
              Bookmarks
            </span>
          </div>
        </div>
      </div>
      <hr class="my-10 opacity-0">
      <div
        class="w-5/6 mx-auto relative isolate bg-accent rounded-t-lg flex items-center py-4 flex-col overflow-clip before:w-44 before:h-44 before:rounded-full before:absolute before:bg-gradient-to-bl before:from-white before:-top-20 before:-left-16 before:opacity-30 before:-z-20 before:content-string after:w-44 after:h-44 after:rounded-full after:absolute after:bg-gradient-to-bl after:from-white after:-bottom-24 after:-right-24 after:opacity-30 after:-z-20 after:content-string">

        <div class="bg-white h-14 w-14 flex justify-center items-center rounded">
          <AppLogo class="fill-accent w-10" />
        </div>
        <p class="text-white text-lg font-medium mt-1">
          AfriSchool
        </p>
        <p class="w-28 mx-auto text-white text-center text-[10px]">
          Download the app and get access to all courses
        </p>
        <div class="flex justify-center gap-2 mt-3 w-5/6 mx-auto">
          <img src="./assets/Badges.png" alt="AppStore" class="w-[70px]">
          <img src="./assets/Badges (1).png" alt="AppStore" class="w-[70px]">
        </div>
        <button class="absolute top-2 right-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0.375 10C0.375 4.6375 4.6375 0.375 10 0.375C15.3625 0.375 19.625 4.6375 19.625 10C19.625 15.3625 15.3625 19.625 10 19.625C4.6375 19.625 0.375 15.3625 0.375 10ZM1.75 10C1.75 14.5375 5.4625 18.25 10 18.25C14.5375 18.25 18.25 14.5375 18.25 10C18.25 5.4625 14.5375 1.75 10 1.75C5.4625 1.75 1.75 5.4625 1.75 10ZM10 11.1L13.7125 14.8125L14.8125 13.7125L11.1 10L14.8125 6.2875L13.7125 5.1875L10 8.9L6.2875 5.1875L5.1875 6.2875L8.9 10L5.1875 13.7125L6.2875 14.8125L10 11.1Z"
              fill="white" />
          </svg>

        </button>
      </div>
      <hr class="bg-black w-full h-0.5">
      <div class="flex justify-center items-center gap-4 mt-6">
        <span>
          <svg class="w-6 dark:fill-white" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16.25 31.75H2.75C2.15347 31.7493 1.58157 31.512 1.15977 31.0902C0.737957 30.6684 0.500685 30.0965 0.5 29.5V2.5C0.500685 1.90347 0.737957 1.33157 1.15977 0.909766C1.58157 0.487957 2.15347 0.250685 2.75 0.25H16.25C16.8465 0.250685 17.4184 0.487957 17.8402 0.909766C18.262 1.33157 18.4993 1.90347 18.5 2.5V5.875H16.25V2.5H2.75V29.5H16.25V26.125H18.5V29.5C18.4993 30.0965 18.262 30.6684 17.8402 31.0902C17.4184 31.512 16.8465 31.7493 16.25 31.75ZM23.1935 17.125L19.1593 21.1593L20.75 22.75L27.5 16L20.75 9.25L19.1593 10.8407L23.1935 14.875H7.25V17.125H23.1935Z" />
          </svg>
        </span>
        <span class="dark:text-white">
          Logout
        </span>
      </div>
    </aside>
    <main class="p-6 px-8 h-[inherit] overflow-y-auto">
      <div class="">
        <h2 class="text-lg mb-4 dark:text-gray-50">Dashboard</h2>
        <div class="flex gap-4 text-gray-700 mb-8">
          <span>
            <img src="./assets/emoji _waving hand sign_.png" alt="waving emoji">
          </span>
          <span class="font-bold text-2xl dark:text-gray-50">
            Welcome back Ngwa
          </span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-700 text-md font-medium dark:text-gray-50">
            Learning Progress
          </span>
          <button class="text-gray-600 dark:text-gray-300">
            See all >
          </button>
        </div>
        <div class="flex justify-between gap-6 mt-4 h-[100px]">
          <div class="bg-white dark:bg-card-dark-bg shadow p-4 w-full rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xl text-gray-700 dark:text-gray-300">
                Python
              </span>
              <span class="text-sm text-gray-500 dark:text-gray-300">
                Beginer
              </span>
            </div>
            <div class="flex items-center gap-5 justify-between">
              <div
                class="bg-blue-light rounded-lg w-full relative h-2 before:content-string before:absolute before:inset-0 before:w-4/5 before:h-full before:bg-blue before:rounded-l-lg ">
              </div>
              <div class="px-3 py-0.5 rounded-md border bg-[#0095ff18] border-blue text-sm text-blue">
                80%
              </div>
            </div>
          </div>
          <div class="bg-white dark:bg-card-dark-bg shadow p-4 w-full rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xl text-gray-700 dark:text-gray-300">
                User Experience
              </span>
              <span class="text-sm text-gray-500 dark:text-gray-300">
                Intermediate
              </span>
            </div>
            <div class="flex items-center gap-5 justify-between">
              <div
                class="bg-green-light rounded-lg w-full relative h-2 before:content-string before:absolute before:inset-0 before:w-1/2 before:h-full before:bg-green before:rounded-l-lg ">
              </div>
              <div class="px-3 py-0.5 rounded-md border bg-[rgba(4,206,139,0.09)] border-green text-sm text-green">
                50%
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end relative isolate rounded-lg  my-8">
          <div class="w-72 pt-6 px-3 text-center mr-6">
            <h4 class="text-lg text-white mb-1">
              AfriSchool Pro
            </h4>
            <p class="text-[11px] text-white mb-3">
              Elevate your learning experience—subscribe for exclusive features and get access to <span
                class="font-bold">Mentors</span>
            </p>
            <button class="bg-accent rounded px-4 text-sm text-white py-1">
              Get Pro
            </button>
          </div>
          <img src="./assets/1 6.png" alt="background" class="-z-10 absolute rounded-lg">
          <button class="absolute top-3 right-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0.375 10C0.375 4.6375 4.6375 0.375 10 0.375C15.3625 0.375 19.625 4.6375 19.625 10C19.625 15.3625 15.3625 19.625 10 19.625C4.6375 19.625 0.375 15.3625 0.375 10ZM1.75 10C1.75 14.5375 5.4625 18.25 10 18.25C14.5375 18.25 18.25 14.5375 18.25 10C18.25 5.4625 14.5375 1.75 10 1.75C5.4625 1.75 1.75 5.4625 1.75 10ZM10 11.1L13.7125 14.8125L14.8125 13.7125L11.1 10L14.8125 6.2875L13.7125 5.1875L10 8.9L6.2875 5.1875L5.1875 6.2875L8.9 10L5.1875 13.7125L6.2875 14.8125L10 11.1Z"
                fill="white" />
            </svg>

          </button>
        </div>
        <div class="flex justify-between mb-4">
          <span class="text-gray-700 dark:text-gray-50 text-md font-medium">
            Started Courses
          </span>
          <button class="text-gray-600 dark:text-gray-300">
            See all >
          </button>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div class="bg-white shadow dark:bg-card-dark-bg p-3">
            <img src="./assets/clement-helardot-95YRwf6CNw8-unsplash 1.png" alt="coding">
            <div class="mt-4">
              <div class="flex justify-between items-center">
                <h4 class="text-gray-700 text-md dark:text-gray-300">Python for Dummies</h4>
                <div class="flex items-center ">
                  <span class="text-[10px] dark:text-gray-300">
                    4.2
                  </span>
                  <span>
                    <svg width="8" height="8" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.5 0L6.73483 3.80041H10.7308L7.49799 6.14919L8.73282 9.94959L5.5 7.60081L2.26718 9.94959L3.50201 6.14919L0.269189 3.80041H4.26517L5.5 0Z"
                        fill="#F36C33" />
                    </svg>
                  </span>
                </div>
              </div>
              <div class="flex mt-4">
                <p class="text-[10px] dark:text-gray-300">Python Mastery for
                  Absolute Beginners.
                </p>
                <button
                  class="bg-accent text-sm items-center justify-center flex w-28 text-white gap-2 px-3 rounded-md h-8">
                  <span>
                    Continue
                  </span>
                  <span>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 3L8.285 3.6965L12.075 7.5H2V8.5H12.075L8.285 12.2865L9 13L14 8L9 3Z" fill="white" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="bg-white dark:bg-card-dark-bg shadow p-3">
            <img src="./assets/ux-indonesia-qC2n6RQU4Vw-unsplash 1.png" alt="ui/ux design">
            <div class="mt-4">
              <div class="flex justify-between items-center">
                <h4 class="text-gray-700 text-md dark:text-gray-300">Ui/Ux Design</h4>
                <div class="flex items-center ">
                  <span class="text-[10px] dark:text-gray-300">
                    4.8
                  </span>
                  <span>
                    <svg width="8" height="8" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.5 0L6.73483 3.80041H10.7308L7.49799 6.14919L8.73282 9.94959L5.5 7.60081L2.26718 9.94959L3.50201 6.14919L0.269189 3.80041H4.26517L5.5 0Z"
                        fill="#F36C33" />
                    </svg>
                  </span>
                </div>
              </div>
              <div class="flex mt-4">
                <p class="text-[10px] dark:text-gray-300">Beginner's Guide to
                  Creative Design
                </p>
                <button
                  class="bg-accent text-sm items-center justify-center flex w-28 text-white gap-2 px-3 rounded-md h-8">
                  <span>
                    Continue
                  </span>
                  <span>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 3L8.285 3.6965L12.075 7.5H2V8.5H12.075L8.285 12.2865L9 13L14 8L9 3Z" fill="white" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="bg-white dark:bg-card-dark-bg shadow p-3">
            <img src="./assets/daniel-korpai-bOKIptPzdPk-unsplash 1.png" alt="Responsive Design">
            <div class="mt-4">
              <div class="flex justify-between items-center">
                <h4 class="text-gray-700 text-md dark:text-gray-300">Responsive Design</h4>
                <div class="flex items-center ">
                  <span class="text-[10px] dark:text-gray-300">
                    3.8
                  </span>
                  <span>
                    <svg width="8" height="8" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.5 0L6.73483 3.80041H10.7308L7.49799 6.14919L8.73282 9.94959L5.5 7.60081L2.26718 9.94959L3.50201 6.14919L0.269189 3.80041H4.26517L5.5 0Z"
                        fill="#F36C33" />
                    </svg>
                  </span>
                </div>
              </div>
              <div class="flex mt-4">
                <p class="text-[10px] dark:text-gray-300">Design for different screens
                  with accuracy
                </p>
                <button
                  class="bg-accent text-sm items-center justify-center flex w-28 text-white gap-2 px-3 rounded-md h-8">
                  <span>
                    Continue
                  </span>
                  <span>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 3L8.285 3.6965L12.075 7.5H2V8.5H12.075L8.285 12.2865L9 13L14 8L9 3Z" fill="white" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <aside class="dark:bg-aside-dark bg-aside p-6 relative overflow-clip isolate">
      <div class="flex gap-10 w-2/3 ml-auto justify-end items-center">
        <div class="relative">
          <svg class="w-8 fill-[#434343] dark:fill-white" viewBox="0 0 40 44" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M39.0606 27.9395L35 23.8788V18.5C34.9952 14.7829 33.6123 11.1997 31.1187 8.44309C28.6251 5.68651 25.198 3.95245 21.5 3.5762V0.5H18.5V3.5762C14.802 3.95245 11.3749 5.68651 8.8813 8.44309C6.38772 11.1997 5.00481 14.7829 5 18.5V23.8788L0.93935 27.9395C0.658081 28.2208 0.500045 28.6022 0.5 29V33.5C0.5 33.8978 0.658035 34.2794 0.93934 34.5607C1.22064 34.842 1.60218 35 2 35H12.5V36.1652C12.4675 38.0681 13.1383 39.916 14.3838 41.355C15.6294 42.7939 17.3621 43.7227 19.25 43.9632C20.2927 44.0667 21.3456 43.9508 22.3408 43.6229C23.336 43.2951 24.2516 42.7626 25.0287 42.0596C25.8057 41.3566 26.427 40.4988 26.8527 39.5413C27.2783 38.5838 27.4988 37.5478 27.5 36.5V35H38C38.3978 35 38.7794 34.842 39.0607 34.5607C39.342 34.2794 39.5 33.8978 39.5 33.5V29C39.5 28.6022 39.3419 28.2208 39.0606 27.9395ZM24.5 36.5C24.5 37.6935 24.0259 38.8381 23.182 39.682C22.3381 40.5259 21.1935 41 20 41C18.8065 41 17.6619 40.5259 16.818 39.682C15.9741 38.8381 15.5 37.6935 15.5 36.5V35H24.5V36.5ZM36.5 32H3.5V29.6211L7.5605 25.5605C7.84182 25.2793 7.99992 24.8978 8 24.5V18.5C8 15.3174 9.26428 12.2652 11.5147 10.0147C13.7652 7.76428 16.8174 6.5 20 6.5C23.1826 6.5 26.2348 7.76428 28.4853 10.0147C30.7357 12.2652 32 15.3174 32 18.5V24.5C32.0001 24.8978 32.1582 25.2793 32.4395 25.5605L36.5 29.6211V32Z" />
          </svg>
          <span
            class="bg-accent  w-4 h-4 rounded-full absolute top-1 right-0 text-white  flex justify-center items-center text-[10px]">
            2
          </span>
        </div>
        <div class="flex">
          <img src="./assets/Photo.png" alt="avi" class="w-10">
          <span class="rotate-90">
            >
          </span>
        </div>
      </div>
      <div class="bg-gray-100 dark:bg-[#212121] rounded-lg mt-8 p-4">
        <div class="flex justify-between">
          <div class="flex gap-2 items-center dark:text-gray-50 bg-[#FFDFD2] dark:bg-[#323232] p-2 text-sm rounded-md">
            <span>
              {{ months[monthIndex] }}
            </span>
            <span>
              {{ year }}
            </span>
          </div>
          <div class="flex gap-6 items-center">
            <button>
              <span class="rotate-180 flex items-center dark:text-gray-50 text-2xl">
                >
              </span>
            </button>
            <button>
              <span class="flex items-center mt-[1px] dark:text-gray-50 text-2xl">
                >
              </span>
            </button>

          </div>
        </div>
        <div class="grid grid-cols-7 mt-2  gap-3">
          <template v-for="day in days">
            <span class="text-accent font-bold text-center">
              {{ day }}
            </span>
          </template>
        </div>
        <div class="grid grid-cols-7 mt-4 gap-3 items-center">
          <span class="col-start-1 col-end-2">

          </span>
          <template v-for="number in 31">
            <button class="flex justify-center dark:text-gray-50 items-center text-[12px] font-medium"
              :class="[number === day ? 'text-accent dark:text-accent  relative isolate before:content-string before:absolute before:w-[120%] before:aspect-square before:bg-accent-light before:-z-10 before:inset-0 before:-left-[2px] before:top-[-3px] before:rounded-full' : '']">
              {{ number }}
            </button>
          </template>
        </div>
      </div>
      <div class="mt-4">
        <div class="flex justify-between ">
          <h3 class="font-medium text-xl dark:text-gray-50">
            Blogs
          </h3>
          <button>
            <span class="dark:text-gray-300">
              See More
            </span>
            <span>
              >
            </span>
          </button>
        </div>
        <div class="flex justify-between gap-3 rounded-lg mt-4 dark:bg-[#212121] shadow p-4">
          <div>
            <img src="./assets/Graphic-Design-Trends-2023 1.png" alt="design" class="w-80">
          </div>
          <div>
            <h4 class="text-[11px] font-medium dark:text-gray-50">
              Graphic design trends
            </h4>
            <p class="text-[8px] dark:text-gray-300">
              Biggest Graphic Design
              Trends for 2023 that will blow
              your mind
            </p>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 w-full">
        <button @click="openChatBox" class="absolute right-4 bottom-2 -z-10">
          <svg viewBox="0 0 24 24" class="fill-none w-16 stroke-accent" xmlns="http://www.w3.org/2000/svg">
            <g stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M18 9V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V18L8 16M20 20L17.8062 18.5374C17.5065 18.3377 17.3567 18.2378 17.1946 18.167C17.0507 18.1042 16.9 18.0586 16.7454 18.031C16.5713 18 16.3912 18 16.0311 18H11.2C10.0799 18 9.51984 18 9.09202 17.782C8.71569 17.5903 8.40973 17.2843 8.21799 16.908C8 16.4802 8 15.9201 8 14.8V12.2C8 11.0799 8 10.5198 8.21799 10.092C8.40973 9.71569 8.71569 9.40973 9.09202 9.21799C9.51984 9 10.0799 9 11.2 9H16.8C17.9201 9 18.4802 9 18.908 9.21799C19.2843 9.40973 19.5903 9.71569 19.782 10.092C20 10.5198 20 11.0799 20 12.2V20Z"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
        </button>
        <span
          class="absolute transition-transform duration-300 ease-in-out bottom-20 right-4 bg-accent-light p-4 text-sm before:content-string before:absolute before:border-accent-light before:right-6 before:border-[14px] before:w-0 before:h-0 before:border-b-transparent before:border-l-transparent border-r-transparent before:rotate-[135deg] before:top-9 "
          :class="[chatNotification ? 'translate-x-0 animate-bounce' : 'translate-x-[200%]']">
          Click to get assistance
        </span>
        <div class="bg-white dark:bg-[#1D1F22] absolute bottom-0 transition-transform duration-300 ease-in z-10 w-full"
          :class="[chatboxToggled ? 'translate-y-0' : 'translate-y-full']">
          <div class="bg-accent text-white py-3 px-6 flex rounded-t-lg justify-between items-center">
            <span>
              Lucinda
            </span>
            <span class="flex gap-4">
              <span class="rotate-90 text-2xl">
                >
              </span>
              <button @click="closeChatBox" class="">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.375 10C0.375 4.6375 4.6375 0.375 10 0.375C15.3625 0.375 19.625 4.6375 19.625 10C19.625 15.3625 15.3625 19.625 10 19.625C4.6375 19.625 0.375 15.3625 0.375 10ZM1.75 10C1.75 14.5375 5.4625 18.25 10 18.25C14.5375 18.25 18.25 14.5375 18.25 10C18.25 5.4625 14.5375 1.75 10 1.75C5.4625 1.75 1.75 5.4625 1.75 10ZM10 11.1L13.7125 14.8125L14.8125 13.7125L11.1 10L14.8125 6.2875L13.7125 5.1875L10 8.9L6.2875 5.1875L5.1875 6.2875L8.9 10L5.1875 13.7125L6.2875 14.8125L10 11.1Z"
                    fill="white" />
                </svg>

              </button>
            </span>
          </div>
          <div class="h-52 bg-accent-light">
            <template v-for="message in botResponse">
              <div class="relative">
                <span
                  class="bg-white dark:bg-[#1D1F22] dark:text-gray-50 flex w-2/3 p-4 rounded-t-2xl rounded-r-2xl ml-16 translate-y-4 text-sm">
                  {{ message }}
                </span>
                <span
                  class="font-bold text-xl text-accent isolate absolute -bottom-5 left-8 before:content-string before:absolute before:w-8 before:h-8 before:rounded-full before:bg-white before:-z-10 before:-left-3 before:-top-[1px] before:inset-0">
                  L
                </span>
              </div>
            </template>
          </div>
          <div class="p-4 mb-4 shadow relative">
            <div class="pr-10">
              <label for="type_message" class="sr-only"></label>
              <input
                class="placeholder:text-sm w-full bg-transparent dark:caret-white focus:border-0 focus:ring-0 focus:outline-none"
                type="text" id="type_message" placeholder="Type a message...">
            </div>
            <button class="absolute right-8 top-1/2 -translate-y-1/2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.3034 9.27685L1.42837 0.33935C1.28827 0.269285 1.1309 0.241212 0.975218 0.25851C0.819534 0.275808 0.672169 0.33774 0.550867 0.43685C0.435024 0.533937 0.348559 0.661414 0.301193 0.804948C0.253827 0.948482 0.247437 1.10238 0.282742 1.24935L2.68774 9.99997L0.250242 18.7262C0.217113 18.849 0.213246 18.9777 0.238952 19.1022C0.264657 19.2267 0.319217 19.3435 0.398246 19.4431C0.477274 19.5426 0.578566 19.6223 0.693975 19.6756C0.809385 19.7289 0.935692 19.7544 1.06274 19.75C1.18993 19.7492 1.31517 19.7186 1.42837 19.6606L19.3034 10.7231C19.4365 10.6549 19.5481 10.5513 19.6261 10.4237C19.7041 10.2961 19.7454 10.1495 19.7454 9.99997C19.7454 9.85044 19.7041 9.7038 19.6261 9.57621C19.5481 9.44862 19.4365 9.34503 19.3034 9.27685ZM2.32212 17.4018L4.11774 10.8125H11.6252V9.18747H4.11774L2.32212 2.5981L17.1177 9.99997L2.32212 17.4018Z"
                  fill="#F36C33" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>
