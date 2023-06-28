<template>
    <div>
        <nav>
            <img src="src/assets/pinia.png" alt="pinia logo">
            <h2>Pinia Tasks</h2>
        </nav>
    </div>
</template>
<script>

export default {
    name: 'headerMain',
}
</script>
<style scoped>
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 0;
    }
    nav img {
        width: 50px;
        margin-right: 1rem;
    }
</style>