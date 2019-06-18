<template>
    <div class="t-progress-circle-canvas-box" ref="canvasBox">
        <canvas class="t-progress-circle-canvas-one" ref="animateCanvas"></canvas>
        <canvas class="t-progress-circle-canvas-three" ref="dashCanvas"></canvas>
        <canvas class="t-progress-circle-canvas-two" ref="pieCanvas"></canvas>
    </div>
</template>

<script>
    import {objectDeepAssign} from "../../utils/objectDeepAssign";

    export default {
        name: "t-progress-circle",
        props: {
            firstLineOptions: Object,
            secondLineOptions: Object,
            outerCircleOptions: Object,
            innerCircleOptions: Object
        },
        computed: {
            firstLine(){
                let options = {
                    text: '83',
                    unit: '  %',
                    fontColor: '#F4B346',
                    fontSize: '20',
                    unitColor: '#92610D',
                    unitSize: '12'
                }
                // console.log(this.firstLineOptions);
                // console.log(objectDeepAssign(options, this.firstLineOptions));
                return objectDeepAssign(options, this.firstLineOptions)
            },
            secondLine(){
                let options = {
                    text: '设备完好率',
                    fontColor: '#3CA5CE',
                    fontSize: '12',
                }
                return objectDeepAssign(options, this.secondLineOptions)
            },
            outerCircle(){
                let options = {
                    lineColor: '#0FD7B8',
                    dashColor: '#85D7F9'
                }
                return objectDeepAssign(options, this.outerCircleOptions)
            },
            innerCircle(){
                let options = {
                    backgroundCircleColor: '#244761',
                    pieRingColor: '#1E8777',
                    pieRingLinear: {
                        startColor: '#1E8777',
                        endColor: '#0ad7ac'
                    }
                }
                return objectDeepAssign(options, this.innerCircleOptions)
            }
        },
        mounted() {
            this.initCircle()
        },
        updated() {
            this.initCircle()
        },
        watch: {
            firstLine(){
                this.drawPie()
            }
        },
        destroyed(){
            clearInterval(this.drawPieTimer)
            this.drawPieTimer = null;
        },
        methods: {
            initCircle(){
                let canvasBox = this.$refs['canvasBox']
                let boxWidth = parseInt(canvasBox.clientWidth)
                let boxHeight = parseInt(canvasBox.clientHeight)
                let diameter = boxWidth > boxHeight ? boxHeight : boxWidth
                this.diameter = diameter
                let r = diameter / 2
                this.r = r
                let animateCanvas = this.$refs['animateCanvas'];
                let pieCanvas = this.$refs['pieCanvas'];
                let dashCanvas = this.$refs['dashCanvas']
                let textCalcuCanvas = document.createElement('canvas') //用于计算文字宽高，使文字居中显示
                this.animateCtx  = animateCanvas.getContext('2d');
                this.pieCtx = pieCanvas.getContext('2d');
                this.dashCtx = dashCanvas.getContext('2d');
                this.textCalcuCtx = textCalcuCanvas.getContext('2d');
                let animateCtx = this.animateCtx
                let pieCtx = this.pieCtx
                let dashCtx = this.dashCtx
                let textCalcuCtx = this.textCalcuCtx
                pieCanvas.width = pieCanvas.height = diameter
                let scale = 4
                if (window.devicePixelRatio) {
                    pieCanvas.style.width = diameter + "px";
                    pieCanvas.style.height = diameter + "px";
                    pieCanvas.height = diameter * scale;
                    pieCanvas.width = diameter * scale;
                    pieCtx.scale(scale, scale);

                    animateCanvas.style.width = diameter + "px";
                    animateCanvas.style.height = diameter + "px";
                    animateCanvas.height = diameter * scale;
                    animateCanvas.width = diameter * scale;
                    animateCtx.scale(scale, scale);

                    dashCanvas.style.width = diameter + "px";
                    dashCanvas.style.height = diameter + "px";
                    dashCanvas.height = diameter * scale;
                    dashCanvas.width = diameter * scale;
                    dashCtx.scale(scale, scale);

                    textCalcuCanvas.style.width = diameter + "px";
                    textCalcuCanvas.style.height = diameter + "px";
                    textCalcuCanvas.height = diameter * scale;
                    textCalcuCanvas.width = diameter * scale;
                    textCalcuCtx.scale(scale, scale);
                }

                this.nowProgressNum = 0
                this.nowPieProgress = -Math.PI / 2

                //外环三边
                // this.drawFirstCircle()

                //虚线环
                // this.drawSecondCircle()

                //数据环
                this.drawPie()

            },
            drawFirstCircle(){
                let r = this.r
                let diameter = this.diameter
                let animateCtx = this.animateCtx

                //外环三边
                let start = -Math.PI / 2
                let degP = Math.PI * 2 / 6
                let firstCircle = r * 0.98
                let end = start + degP
                let bigPoint = r * 0.024
                let smallPoint = r * 0.016
                for(let i = 0; i < 3; i++){
                    animateCtx.save();
                    animateCtx.beginPath();
                    animateCtx.arc( r, r, firstCircle, start, end , false);
                    animateCtx.lineWidth = 1;
                    animateCtx.strokeStyle = this.outerCircle.lineColor;
                    animateCtx.stroke();
                    animateCtx.restore()

                    let smallCirclePointX =  r + firstCircle * Math.cos(start),
                        smallCirclePointY = r +  firstCircle * Math.sin(start)
                    let bigCirclePointX =  r + firstCircle * Math.cos(end),
                        bigCirclePointY = r +  firstCircle * Math.sin(end)
                    animateCtx.save();
                    animateCtx.beginPath();
                    animateCtx.arc( smallCirclePointX, smallCirclePointY, bigPoint, 0,  Math.PI * 2 , false);
                    animateCtx.closePath();
                    animateCtx.fillStyle = this.outerCircle.lineColor;
                    animateCtx.fill();
                    animateCtx.restore()

                    animateCtx.save();
                    animateCtx.beginPath();
                    animateCtx.arc( bigCirclePointX, bigCirclePointY, smallPoint, 0, Math.PI * 2 , false);
                    animateCtx.closePath();
                    animateCtx.fillStyle = this.outerCircle.lineColor;
                    animateCtx.fill();
                    animateCtx.restore()

                    start = end + degP
                    end = start + degP

                }
            },
            drawSecondCircle(){
                let r = this.r
                let diameter = this.diameter
                let dashCtx = this.dashCtx

                let secondCircle = r * 0.92
                //虚线圆
                dashCtx.save();
                dashCtx.beginPath();
                dashCtx.arc( diameter / 2, diameter / 2, secondCircle , 0, Math.PI * 2, false);
                dashCtx.closePath();
                dashCtx.lineWidth = 1;
                dashCtx.setLineDash([2, 5])
                dashCtx.strokeStyle = this.outerCircle.dashColor
                dashCtx.stroke();
                dashCtx.restore()
            },
            drawPie(){
                let r = this.r
                let diameter = this.diameter
                let pieCtx = this.pieCtx
                let pieBgCircle = r * 0.74
                let pieProgressCircle = r * 0.74

                let pieStart = -Math.PI / 2
                let pieEnd = pieStart + Math.PI * 2 * (this.firstLine.text / 100)
                let pieProgress = this.nowPieProgress
                let speed = 0.2
                let progressNum = this.firstLine.text
                let finalFlag = false
                clearInterval(this.drawPieTimer)
                this.drawPieTimer = null;
                this.drawPieTimer = setInterval(() => {
                    pieCtx.clearRect(0, 0, diameter, diameter)

                    if(this.nowPieProgress > pieEnd){
                        speed = -0.2
                    }

                    pieCtx.save();
                    pieCtx.beginPath();
                    pieCtx.arc( r, r, pieBgCircle , 0, Math.PI * 2, false);
                    pieCtx.closePath();
                    pieCtx.lineWidth = r * 0.12;
                    pieCtx.strokeStyle = this.innerCircle.backgroundCircleColor
                    pieCtx.stroke()
                    pieCtx.restore()

                    // let pieStart = -Math.PI / 2
                    // let pieEnd = pieStart + Math.PI * 2 * (this.firstLine.text / 100)
                    if(Math.abs(pieProgress - pieEnd) <= Math.abs(speed)){
                        clearInterval(this.drawPieTimer)
                        this.drawPieTimer = null;
                        pieProgress = pieEnd
                        this.firstLine.text = progressNum
                        this.nowPieProgress = pieEnd
                        this.nowProgressNum = progressNum
                        finalFlag = true
                    }
                    pieCtx.save();
                    pieCtx.beginPath();
                    pieCtx.arc( r, r, pieProgressCircle , pieStart, pieProgress, false);
                    let g = this.innerCircle.pieRingColor
                    if(this.innerCircle.pieRingLinear.startColor){
                        g = pieCtx.createLinearGradient(0,0,270,0);  //创建渐变对象  渐变开始点和渐变结束点
                        g.addColorStop(0, this.innerCircle.pieRingLinear.startColor); //添加颜色点
                        g.addColorStop(1, this.innerCircle.pieRingLinear.endColor); //添加颜色点
                    }
                    pieCtx.strokeStyle = g;     //使用渐变对象作为圆环的颜色
                    pieCtx.lineWidth = r * 0.22;
                    // pieCtx.strokeStyle = '#0FD7B8'
                    pieCtx.stroke()
                    pieCtx.restore()

                    pieProgress += speed
                    let num =  parseInt(((pieProgress - pieStart) / (Math.PI * 2)) * 100)

                    if(finalFlag){
                        this.nowProgressNum = num = progressNum
                    }
                    this.firstLine.text = num

                    //通过文字宽高及文字间距，调整文字坐标使其居中
                    let unitLeftSpace = r * 0.04
                    let secondTopSpace = r * 0.16
                    this.textCalcuCtx.font = "bold "+ this.firstLine.fontSize +"pt Arial";
                    let firstMeasureText = this.textCalcuCtx.measureText(this.firstLine.text)
                    let firstLineY = r - this.firstLine.fontSize / 2 - secondTopSpace / 2


                    this.textCalcuCtx.font = "bold "+ this.firstLine.unitSize +"pt Arial";
                    let firstUnitMeasureText = this.textCalcuCtx.measureText(this.firstLine.unit)

                    let firstLineUnitY = firstLineY + (this.firstLine.fontSize  - this.firstLine.unitSize) / 2 / 1.5 //字体与行高一般差1.5的倍数
                    let firstLineFontX = r - (firstUnitMeasureText.width / 2 + unitLeftSpace / 2)
                    let firstLineUnitX = r + (firstMeasureText.width / 2 + unitLeftSpace / 2)

                    this.textCalcuCtx.font = "bold "+ this.secondLine.fontSize +"pt Arial";
                    // let secondMeasureText = this.textCalcuCtx.measureText(this.secondLine.text)
                    let secondLineY = r + this.secondLine.fontSize / 2 + secondTopSpace / 2


                    //在中间写字
                    // console.log(this.firstLine.fontSize);
                    pieCtx.save();
                    pieCtx.font = "bold "+ 18 +"pt NumberFont";  // 字体大小，样式
                    pieCtx.fillStyle = this.firstLine.fontColor;  // 颜色
                    pieCtx.textAlign = 'center';  // 位置
                    pieCtx.textBaseline = 'middle';
                    pieCtx.moveTo(r,r);  // 文字填充位置
                    pieCtx.fillText(this.firstLine.text, firstLineFontX, firstLineY);
                    if(this.firstLine.unit){
                        pieCtx.font = "bold "+ this.firstLine.unitSize +"pt Arial";
                        pieCtx.textBaseline = 'middle';
                        pieCtx.fillStyle = this.firstLine.unitColor;  // 颜色
                        pieCtx.fillText(this.firstLine.unit, firstLineUnitX, firstLineUnitY);
                    }
                    pieCtx.restore();
                    //在中间写字
                    pieCtx.save();
                    pieCtx.font = "bold "+ this.secondLine.fontSize +"pt NumberFont";  // 字体大小，样式
                    pieCtx.fillStyle = this.secondLine.fontColor;  // 颜色
                    pieCtx.textAlign = 'center';  // 位置
                    pieCtx.textBaseline = 'middle';
                    pieCtx.moveTo(r,r);  // 文字填充位置
                    pieCtx.fillText(this.secondLine.text, r, secondLineY);
                    pieCtx.restore();
                }, 30)
            }
        }
    }
</script>

<style scoped>
    .t-progress-circle-canvas-box{
        position: relative;
    }
    .t-progress-circle-canvas-one,
    .t-progress-circle-canvas-two{
        position: absolute;
        top: 0;
        left: 0;
    }
    .t-progress-circle-canvas-one{
        animation:circle 6s infinite linear;
    }
    @-webkit-keyframes circle{
        0%{ transform:rotate(0deg); }
        100%{ transform:rotate(-360deg); }
    }
    .t-progress-circle-canvas-three{
        animation:circle1 8s infinite linear;
    }
    @-webkit-keyframes circle1{
        0%{ transform:rotate(-360deg); }
        100%{ transform:rotate(0deg); }
    }
</style>
