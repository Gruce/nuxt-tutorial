<template>
    <div flex>
        <div flex="basis-1/3">
            <slot name="left" />
        </div>
        <div flex="basis-2/3">
            <slot name="right" />
        </div>
    </div>
</template>