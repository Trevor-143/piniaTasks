<template>
    <div>
        <nav>
            <router-link to="/">Your Tasks</router-link>
            <router-link to="/Add">Add Tasks</router-link>
            <router-link to="/about">About Tasks</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'navigation'
}
</script>
<style>

nav {
    display: flex;
    align-items: center;
    justify-content: center;
}
a {
    color: #000;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    text-decoration: none;
    border-radius: 0.5rem;
}
a.router-link-exact-active {
    color: rgb(66, 151, 21);
    background-color: rgb(240, 255, 143);
    font-weight: 600;
}
    
</style>