<template>
    <div>
        <header class="shadow-sm bg-blue-950">
            <nav class="container mx-auto p-4 flex justify-between text-white">
                <NuxtLink class="font-bold" to="/"><img src="../assets/images/logo.png" height="0" width="60"></NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><a  href="/cars">cars</a></li>
                    <li><NuxtLink to="/add">Add Car</NuxtLink></li>

                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between text-white border-t-2 h-40">
            <p> CopyWrite &copy; 2023</p>

            <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><a  href="/cars">Cars</a></li>
                    <li><NuxtLink to="/add">Add car</NuxtLink></li>

                </ul>
        </footer>
    </div>
</template>
<style scoped>
.router-link-exact-active {
    color:#12b488
}
</style>