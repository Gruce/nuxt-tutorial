<template>
    <div class="">
        <div flex="~ col gap-10" h="full">
            <Header />
            <div flex="grow">
                <slot />
            </div>
        </div>
    </div>
</template>