<template>
    <div>
        <header class="shadow-sm bg-white text-black">
            <nav class="container mx-auto p-4">
                <a class="font-bold" href="/cars"><img src="../assets/images/logo.png" height="0" width="60"></a>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between text-white border-t-2">
            <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><a href="/cars">Cars</a></li>
                </ul>
        </footer>
    </div>
</template>
<style scoped>
.router-link-exact-active {
    color:#12b488
}
</style>