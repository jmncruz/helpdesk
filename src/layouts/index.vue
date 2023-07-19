<script setup>
import { PlusCircle, Home, HelpCircle, Settings } from 'lucide-vue-next';
</script>
<template>
    <main class="w-scree h-scree flex">
        <nav class="w-14 h-full bg-gradient-to-r from-gray-400 to-gray-400 shadow-2xl fixed">
            <div class="w-14 h-14 flex justify-center items-center">
                <img class="w-8" src="https://sta.declatecnologia.com.br/assets/logo.8bd7ebca.png" alt="logo" srcset="">
            </div>
            <div class="w-full h-[calc(100vh-3.5rem*4)]">
                <div class="w-full h-14 flex justify-center items-center ">
                    <Home  color="gray" stroke-width="2" :size="22" />
                </div>
            </div>
            <div class="w-full h-36 text-center">
                <div class="w-14 h-14 flex justify-center items-center">
                    <Settings  color="gray" stroke-width="2" :size="22" />
                </div>
                <div class="w-14 h-14 flex justify-center items-center">
                    <HelpCircle  color="gray" stroke-width="2" :size="22" />
                </div>
                <div class="w-14 h-14"></div>
            </div>
        </nav>
        <section class="w-full bg-indigo-800">
            <nav class="w-[calc(100%-3.5rem)] h-14 bg-indigo-700  fixed right-0">
                <div class="w-full h-full ml-1 border-b-4 border-red-700">
                    <div class="w-14 h-full flex justify-center items-center bg-slate-50 ">
                        <PlusCircle color="gray" :size="22" />
                    </div>
                </div>
            </nav>
            <section class="w-[calc(100%-3.5rem)] h-[calc(100vh-3.5rem)] mt-14 ml-14 overflow-auto">
                <router-view />
            </section>
        </section>
    </main>
</template>