<template>
    <nav id="navbar">
        <ul>
            <router-link to="/">
                <li>Produtos</li>
            </router-link>
            <router-link to="/carrinho">
                <li>Carrinho</li>
            </router-link>
        </ul>
    </nav>
</template>

<style scoped>
@import "../assets/base.css";

#navbar ul {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    gap: 24px;
}

#navbar ul a {
    text-decoration: none;
    color: var(--neutral);
}

#navbar ul a:hover,
#navbar ul a:active {
    text-decoration: underline;
}

#navbar ul li {
    list-style: none;
    color: var(--neutral);
}
</style>
