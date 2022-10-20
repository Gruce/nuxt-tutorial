<template>
    <div>
        <h1> Calculator</h1>
        <div class="main-div">
            <div class="screen">
                <div>
                    <p></p>
                </div>
                <div class="clear">C</div>
            </div>
            <ul class="number-div">
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>*</li>

                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>-</li>

                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>+</li>

                <li>0</li>
                <li>.</li>
                <li>=</li>
                <li>/</li>
            </ul>
        </div>
    </div>
</template>
<style >
body {
    background-color: pink;
}

* {
    box-sizing: border-box;
    font: bold 14px Arial, sans-serif;
}

h1 {
    font-size: 40px;
    text-align: center;
    margin-bottom: 110px;
    background: #673AB7;
    color: white;
    padding: 20px;
}

.main-div {
    width: 350px;
    margin: auto;
    background: #720572;
    height: 310px;
    box-shadow: 2px 2px 2px gray;
    padding: 15px;
    border-bottom: 5px solid #ED586C;
    border-top: 4px solid #ED586C;
    border-radius: 10px;
    position: relative;
}

.screen {
    list-style: none;
    color: white;
    height: 45px;
    width: 58px;
    margin-left: 40px;
    border-radius: 4px;
    border-top: 4px solid #828A9B;
    text-align: center;
    font-weight: bold;
    font-family: 'Ubuntu', sans-serif;
    margin-bottom: 8px;
    width: 182px;
    background: #828A9B;
    border-top: 4px solid #ED586C;

}

.clear {
    width: 50px;
    background: #7B8D8E;
    padding: 14px 17px;
    position: absolute;
    border-radius: 4px;
    left: 250px;
    top: 15px;
    color: white;
    cursor: pointer;
    text-align: center;
    border-top: 4px solid #ED586C;

}

.clear:hover {
    background: rgba(143, 112, 133, 0.366);
    color: black;
}

.number-div li {
    list-style: none;
    float: left;
    width: 52px;
    background: white;
    margin: 9px 5px 5px;
    padding: 10px;
    border-bottom: 4px solid #828A9B;
    border-radius: 5px;
    color: #888888;
    text-align: center;
    cursor: pointer;
}

.number-div li:hover,
#equals:hover {
    background: #e317e6;
    color: white;
}
</style>



