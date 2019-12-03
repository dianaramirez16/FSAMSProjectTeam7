<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/styles.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet">
    <!--script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script-->
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
    <title>Fire Safety Alarm Management System</title>

  </head>
  <body>
        <!--code for login popup-->

<!--Popup no longer needed in Admin.php -->
    <div class='popup'>
      <div class='popupStyles'>
        <div class = 'adminlogin' style = 'margin-left: 75px;'>
      <h1>Access: Accepted</h1>
      </div>
      <h2 style = 'margin-left:130px;color:#7fff69; font-size: 20px;'>
        Full Control Pannel Access
      </h2>
      <br/>
      <br/>
      <a href='' class='close' style = 'margin-left: 240px;'>Close</a>
      </p>
      </div>
    </div>

    <!--div class='popup911'>
      <div class='stylesE'>
      <h1>EMERGENCY SERVICES HAVE BEEN CALLED</h1>
      <h1>PLEASE EVACUATE THE BUILDING</h1>
      </div>
    </div-->
    <!--END code for login popup-->

    <div id="container"
      <nav>
        <section class="top-panel">

          <div id="clockbox"></div>
          <a id="systemStatus">System Status: On</a> |
          <a class="simFire" href="#">Simulate Fire</a> |
          <a href="#">Emergency Drill</a> |
          <a href="#">ACCESS</a>
          <a href="login.php">Login</a>
          <div class="clock-panel">
            <span>Time Elapsed Since Alert:</span>
            <span class="clock">0:00</span>
          </div>
        </section>

      </nav>
      <div class="bottom">




        <div id ="left-side">
          <div id="commandContainer" class="commandContainer">
            <p>Goodmorning, authorized user you have been logged in.</p>

          </div>
          <div class="spacer"></div> <!-- creates blank space between divs-->
          <div class="override-panel">
            <h3>Override Panel</h3>

            <button id="call911" onclick="run911Modal();">Call 911</button>
            <button id ="lockDownButton">Lock All</button>
            <button id="shutOffButton" onclick="stopClock();">Shut OFF</button>
          </div>
        </div> <!-- end left sidebar-->


        <div class="spacer"></div> <!-- creates blank space between divs-->
        <div id="middleDivs">
          <div class="grid-container">
            <div class="middle">
              <div class="grid-item room1Grid" id="box1">1</div>
              <div class="grid-item room1Grid" id="box2">2</div>
              <div class="grid-item room1Grid" id="box3">3</div>
              <div class="grid-item room1Grid lightPath" id="box4">4</div>
              <div class="grid-item room2Grid lightPath" id="box5">5</div>
              <div class="grid-item room2Grid lightPath" id="box6">6</div>
              <div class="grid-item room2Grid lightPath" id="box7">7</div>
              <div class="grid-item room2Grid lightPath" id="box8">8</div>
              <div class="grid-item room3Grid lightPath" id="box9">9</div>
              <div class="grid-item room3Grid lightPath" id="box10">10</div>
              <div class="grid-item room3Grid" id="box11">11</div>
              <div class="grid-item room3Grid" id="box12">12</div>
              <div class="grid-item room3Grid right-border" id="box13">13</div>
              <div class="grid-item room3Grid" id="box14">14</div>
              <div class="grid-item room3Grid" id="box15">15</div>
              <div class="grid-item room3Grid" id="box16">16</div>
              <div class="grid-item hallwayGrid" id="box17">17</div>
              <div class="grid-item hallwayGrid" id="box18">18</div>
              <div class="grid-item hallwayGrid" id="box19">19</div>
              <div class="grid-item hallwayGrid" id="box20">20</div>
              <div class="grid-item hallwayGrid" id="box21">21</div>
              <div class="grid-item hallwayGrid" id="box22">22</div>
              <div class="grid-item hallwayGrid" id="box23">23</div>
              <div class="grid-item hallwayGrid" id="box24">24</div>
              <div class="grid-item hallwayGrid lightPath" id="box25">25</div>
              <div class="grid-item hallwayGrid lightPath" id="box26">26</div>
              <div class="grid-item room1Grid" id="box27">27</div>
              <div class="grid-item room1Grid" id="box28">28</div>
              <div class="grid-item room1Grid" id="box29">29</div>
              <div class="grid-item room1Grid" id="box30">30</div>
              <div class="grid-item room2Grid" id="box31">31</div>
              <div class="grid-item room2Grid" id="box32">32</div>
              <div class="grid-item room2Grid" id="box33">33</div>
              <div class="grid-item room2Grid" id="box34">34</div>
              <div class="grid-item room3Grid" id="box35">35</div>
              <div class="grid-item room3Grid lightPath" id="box36">36</div>
              <div class="grid-item room3Grid lightPath" id="box37">37</div>
              <div class="grid-item room3Grid lightPath" id="box38">38</div>
              <div class="grid-item room3Grid lightPath right-border" id="box39">39</div>
              <div class="grid-item room3Grid lightPath" id="box40">40</div>
              <div class="grid-item room3Grid" id="box41">41</div>
              <div class="grid-item room3Grid" id="box42">42</div>
              <div class="grid-item hallwayGrid lightPath" id="box43">43</div>
              <div class="grid-item hallwayGrid lightPath" id="box44">44</div>
              <div class="grid-item hallwayGrid lightPath" id="box45">45</div>
              <div class="grid-item hallwayGrid lightPath" id="box46">46</div>
              <div class="grid-item hallwayGrid lightPath" id="box47">47</div>
              <div class="grid-item hallwayGrid lightPath" id="box48">48</div>
              <div class="grid-item hallwayGrid lightPath" id="box49">49</div>
              <div class="grid-item hallwayGrid lightPath" id="box50">50</div>
              <div class="grid-item hallwayGrid lightPath" id="box51">51</div>
              <div class="grid-item hallwayGrid lightPath" id="box52">52</div>
              <div class="grid-item room1Grid lightPath" id="box53">53</div>
              <div class="grid-item room1Grid" id="box54">54</div>
              <div class="grid-item room1Grid" id="box54">55</div>
              <div class="grid-item room1Grid" id="box55">56</div>
              <div class="grid-item room2Grid" id="box56">57</div>
              <div class="grid-item room2Grid" id="box58">58</div>
              <div class="grid-item room2Grid" id="box59">59</div>
              <div class="grid-item room2Grid" id="box60">60</div>
              <div class="grid-item room3Grid" id="box61">61</div>
              <div class="grid-item room3Grid lightPath" id="box62">62</div>
              <div class="grid-item room3Grid" id="box63">63</div>
              <div class="grid-item room3Grid" id="box64">64</div>
              <div class="grid-item room3Grid right-border" id="box65">65</div>
              <div class="grid-item room3Grid" id="box66">66</div>
              <div class="grid-item room3Grid" id="box67">67</div>
              <div class="grid-item room3Grid" id="box68">68</div>
              <div class="grid-item hallwayGrid lightPath" id="box69">69</div>
              <div class="grid-item hallwayGrid" id="box70">70</div>
              <div class="grid-item girlGrid" id="box71">71</div>
              <div class="grid-item girlGrid" id="box72">72</div>
              <div class="grid-item girlGrid" id="box73">73</div>
              <div class="grid-item girlGrid" id="box74">74</div>
              <div class="grid-item hallwayGrid lightPath" id="box75">75</div>
              <div class="grid-item hallwayGrid" id="box76">76</div>
              <div class="grid-item workAreaGrid" id="box77">77</div>
              <div class="grid-item workAreaGrid" id="box78">78</div>
              <div class="grid-item kitchenGrid lightPath" id="box79">79</div>
              <div class="grid-item kitchenGrid" id="box80">80</div>
              <div class="grid-item kitchenGrid" id="box81">81</div>
              <div class="grid-item meeting1Grid" id="box82">82</div>
              <div class="grid-item meeting1Grid" id="box83">83</div>
              <div class="grid-item meeting1Grid" id="box84">84</div>
              <div class="grid-item middleRoomGrid" id="box85">85</div>
              <div class="grid-item middleRoomGrid" id="box86">86</div>
              <div class="grid-item middleRoomGrid" id="box87">87</div>
              <div class="grid-item middleRoomGrid lightPath" id="box88">88</div>
              <div class="grid-item middleRoomGrid lightPath" id="box89">89</div>
              <div class="grid-item middleRoomGrid lightPath" id="box90">90</div>
              <div class="grid-item middleRoomGrid right-border lightPath" id="box91">91</div>
              <div class="grid-item middleRoomGrid lightPath" id="box92">92</div>
              <div class="grid-item middleRoomGrid" id="box93">93</div>
              <div class="grid-item middleRoomGrid" id="box94">94</div>
              <div class="grid-item hallwayGrid lightPath" id="box95">95</div>
              <div class="grid-item hallwayGrid" id="box96">96</div>
              <div class="grid-item girlGrid" id="box97">97</div>
              <div class="grid-item girlGrid" id="box98">98</div>
              <div class="grid-item girlGrid lightPath" id="box99">99</div>
              <div class="grid-item girlGrid lightPath" id="box100">100</div>
              <div class="grid-item hallwayGrid lightPath" id="box101">101</div>
              <div class="grid-item hallwayGrid" id="box102">102</div>
              <div class="grid-item workAreaGrid" id="box103">103</div>
              <div class="grid-item workAreaGrid" id="box104">104</div>
              <div class="grid-item kitchenGrid" id="box105">105</div>
              <div class="grid-item kitchenGrid lightPath" id="box106">106</div>
              <div class="grid-item kitchenGrid" id="box107">107</div>
              <div class="grid-item meeting1Grid" id="box108">108</div>
              <div class="grid-item meeting1Grid lightPath" id="box109">109</div>
              <div class="grid-item meeting1Grid" id="box110">110</div>
              <div class="grid-item middleRoomGrid" id="box111">111</div>
              <div class="grid-item middleRoomGrid" id="box112">112</div>
              <div class="grid-item middleRoomGrid" id="box113">113</div>
              <div class="grid-item middleRoomGrid" id="box114">114</div>
              <div class="grid-item middleRoomGrid" id="box115">115</div>
              <div class="grid-item middleRoomGrid" id="box116">116</div>
              <div class="grid-item middleRoomGrid right-border lightPath" id="box117">117</div>
              <div class="grid-item middleRoomGrid" id="box118">118</div>
              <div class="grid-item middleRoomGrid" id="box119">119</div>
              <div class="grid-item middleRoomGrid" id="box120">120</div>
              <div class="grid-item hallwayGrid lightPath" id="box121">121</div>
              <div class="grid-item hallwayGrid" id="box122">122</div>
              <div class="grid-item girlGrid" id="box123">123</div>
              <div class="grid-item girlGrid" id="box124">124</div>
              <div class="grid-item girlGrid" id="box125">125</div>
              <div class="grid-item girlGrid" id="box126">126</div>
              <div class="grid-item hallwayGrid lightPath" id="box127">127</div>
              <div class="grid-item hallwayGrid lightPath" id="box128">128</div>
              <div class="grid-item workAreaGrid lightPath" id="box129">129</div>
              <div class="grid-item workAreaGrid" id="box130">130</div>
              <div class="grid-item kitchenGrid" id="box131">131</div>
              <div class="grid-item kitchenGrid" id="box132">132</div>
              <div class="grid-item kitchenGrid lightPath" id="box133">133</div>
              <div class="grid-item meeting1Grid" id="box134">134</div>
              <div class="grid-item meeting1Grid lightPath" id="box135">135</div>
              <div class="grid-item meeting1Grid" id="box136">136</div>
              <div class="grid-item middleRoomGrid" id="box137">137</div>
              <div class="grid-item middleRoomGrid" id="box138">138</div>
              <div class="grid-item middleRoomGrid" id="box139">139</div>
              <div class="grid-item middleRoomGrid" id="box140">140</div>
              <div class="grid-item middleRoomGrid" id="box141">141</div>
              <div class="grid-item middleRoomGrid" id="box142">142</div>
              <div class="grid-item middleRoomGrid right-border lightPath" id="box143">143</div>
              <div class="grid-item middleRoomGrid" id="box144">144</div>
              <div class="grid-item middleRoomGrid" id="box145">145</div>
              <div class="grid-item middleRoomGrid" id="box146">146</div>
              <div class="grid-item hallwayGrid lightPath" id="box147">147</div>
              <div class="grid-item hallwayGrid" id="box148">148</div>
              <div class="grid-item boyGrid" id="box149">149</div>
              <div class="grid-item boyGrid" id="box150">150</div>
              <div class="grid-item boyGrid lightPath" id="box151">151</div>
              <div class="grid-item boyGrid lightPath" id="box152">152</div>
              <div class="grid-item hallwayGrid lightPath" id="box153">153</div>
              <div class="grid-item hallwayGrid" id="box154">154</div>
              <div class="grid-item workAreaGrid" id="box155">155</div>
              <div class="grid-item workAreaGrid" id="box156">156</div>
              <div class="grid-item classroomGrid top-border" id="box157">157</div>
              <div class="grid-item classroomGrid top-border" id="box158">158</div>
              <div class="grid-item classroomGrid top-border lightPath" id="box159">159</div>
              <div class="grid-item classroomGrid top-border lightPath" id="box160">160</div>
              <div class="grid-item classroomGrid top-border lightPath" id="box161">161</div>
              <div class="grid-item classroomGrid top-border lightPath" id="box162">162</div>
              <div class="grid-item middleRoomGrid top-border" id="box163">163</div>
              <div class="grid-item middleRoomGrid top-border" id="box164">164</div>
              <div class="grid-item middleRoomGrid top-border" id="box165">165</div>
              <div class="grid-item middleRoomGrid top-border" id="box166">166</div>
              <div class="grid-item middleRoomGrid top-border" id="box167">167</div>
              <div class="grid-item middleRoomGrid top-border" id="box168">168</div>
              <div class="grid-item middleRoomGrid top-border right-border lightPath" id="box169">169</div>
              <div class="grid-item middleRoomGrid top-border lightPath" id="box170">170</div>
              <div class="grid-item middleRoomGrid top-border" id="box171">171</div>
              <div class="grid-item middleRoomGrid top-border" id="box172">172</div>
              <div class="grid-item hallwayGrid lightPath top-border" id="box173">173</div>
              <div class="grid-item hallwayGrid top-border" id="box174">174</div>
              <div class="grid-item boyGrid top-border" id="box175">175</div>
              <div class="grid-item boyGrid top-border" id="box176">176</div>
              <div class="grid-item boyGrid top-border" id="box177">177</div>
              <div class="grid-item boyGrid top-border" id="box178">178</div>
              <div class="grid-item hallwayGrid lightPath top-border" id="box179">179</div>
              <div class="grid-item hallwayGrid top-border lightPath" id="box180">180</div>
              <div class="grid-item workAreaGrid top-border lightPath" id="box181">181</div>
              <div class="grid-item workAreaGrid top-border" id="box182">182</div>
              <div class="grid-item classroomGrid" id="box183">183</div>
              <div class="grid-item classroomGrid" id="box184">184</div>
              <div class="grid-item classroomGrid" id="box185">185</div>
              <div class="grid-item classroomGrid" id="box186">186</div>
              <div class="grid-item classroomGrid" id="box187">187</div>
              <div class="grid-item classroomGrid lightPath" id="box188">188</div>
              <div class="grid-item middleRoomGrid" id="box189">189</div>
              <div class="grid-item middleRoomGrid" id="box190">190</div>
              <div class="grid-item middleRoomGrid" id="box191">191</div>
              <div class="grid-item middleRoomGrid" id="box192">192</div>
              <div class="grid-item middleRoomGrid" id="box193">193</div>
              <div class="grid-item middleRoomGrid" id="box194">194</div>
              <div class="grid-item middleRoomGrid middleRoomGrid right-border" id="box195">195</div>
              <div class="grid-item middleRoomGrid lightPath" id="box196">196</div>
              <div class="grid-item middleRoomGrid" id="box197">197</div>
              <div class="grid-item hallwayGrid" id="box198">198</div>
              <div class="grid-item hallwayGrid lightPath" id="box199">199</div>
              <div class="grid-item hallwayGrid" id="box200">200</div>
              <div class="grid-item boyGrid" id="box201">201</div>
              <div class="grid-item boyGrid" id="box202">202</div>
              <div class="grid-item boyGrid" id="box203">203</div>
              <div class="grid-item boyGrid" id="box204">204</div>
              <div class="grid-item hallwayGrid lightPath" id="box205">205</div>
              <div class="grid-item hallwayGrid" id="box206">206</div>
              <div class="grid-item workAreaGrid" id="box207">207</div>
              <div class="grid-item workAreaGrid" id="box208">208</div>
              <div class="grid-item classroomGrid" id="box209">209</div>
              <div class="grid-item classroomGrid" id="box210">210</div>
              <div class="grid-item classroomGrid" id="box211">211</div>
              <div class="grid-item classroomGrid" id="box212">212</div>
              <div class="grid-item classroomGrid" id="box213">213</div>
              <div class="grid-item classroomGrid lightPath" id="box214">214</div>
              <div class="grid-item middleRoomGrid" id="box215">215</div>
              <div class="grid-item middleRoomGrid" id="box216">216</div>
              <div class="grid-item middleRoomGrid" id="box217">217</div>
              <div class="grid-item middleRoomGrid" id="box218">218</div>
              <div class="grid-item middleRoomGrid" id="box219">219</div>
              <div class="grid-item middleRoomGrid" id="box220">220</div>
              <div class="grid-item middleRoomGrid right-border" id="box221">221</div>
              <div class="grid-item middleRoomGrid lightPath" id="box222">222</div>
              <div class="grid-item hallwayGrid" id="box223">223</div>
              <div class="grid-item hallwayGrid lightPath" id="box224">224</div>
              <div class="grid-item hallwayGrid" id="box225">225</div>
              <div class="grid-item mainRoomGrid" id="box226">226</div>
              <div class="grid-item mainRoomGrid" id="box227">227</div>
              <div class="grid-item mainRoomGrid" id="box228">228</div>
              <div class="grid-item mainRoomGrid" id="box229">229</div>
              <div class="grid-item mainRoomGrid" id="box230">230</div>
              <div class="grid-item mainRoomGrid lightPath" id="box231">231</div>
              <div class="grid-item mainRoomGrid" id="box232">232</div>
              <div class="grid-item mainRoomGrid" id="box233">233</div>
              <div class="grid-item mainRoomGrid" id="box234">234</div>
              <div class="grid-item classroomGrid" id="box235">235</div>
              <div class="grid-item classroomGrid" id="box236">236</div>
              <div class="grid-item classroomGrid" id="box237">237</div>
              <div class="grid-item classroomGrid" id="box238">238</div>
              <div class="grid-item hallwayGrid lightPath" id="box239">239</div>
              <div class="grid-item hallwayGrid lightPath" id="box240">240</div>
              <div class="grid-item hallwayGrid lightPath" id="box241">241</div>
              <div class="grid-item hallwayGrid lightPath" id="box242">242</div>
              <div class="grid-item hallwayGrid lightPath" id="box243">243</div>
              <div class="grid-item hallwayGrid lightPath" id="box244">244</div>
              <div class="grid-item hallwayGrid lightPath" id="box245">245</div>
              <div class="grid-item hallwayGrid lightPath" id="box246">246</div>
              <div class="grid-item hallwayGrid lightPath right-border" id="box247">247</div>
              <div class="grid-item hallwayGrid lightPath" id="box248">248</div>
              <div class="grid-item hallwayGrid lightPath" id="box249">249</div>
              <div class="grid-item hallwayGrid lightPath" id="box250">250</div>
              <div class="grid-item mainRoomGrid" id="box251">251</div>
              <div class="grid-item mainRoomGrid" id="box252">252</div>
              <div class="grid-item mainRoomGrid" id="box253">253</div>
              <div class="grid-item mainRoomGrid" id="box254">254</div>
              <div class="grid-item mainRoomGrid" id="box255">255</div>
              <div class="grid-item mainRoomGrid" id="box256">256</div>
              <div class="grid-item mainRoomGrid lightPath" id="box257">257</div>
              <div class="grid-item mainRoomGrid" id="box258">258</div>
              <div class="grid-item mainRoomGrid" id="box259">259</div>
              <div class="grid-item mainRoomGrid" id="box260">260</div>
              <div class="grid-item computerLabGrid lightPath" id="box261">261</div>
              <div class="grid-item computerLabGrid lightPath" id="box262">262</div>
              <div class="grid-item computerLabGrid lightPath" id="box263">263</div>
              <div class="grid-item computerLabGrid lightPath" id="box264">264</div>
              <div class="grid-item computerLabGrid lightPath" id="box265">265</div>
              <div class="grid-item computerLabGrid" id="box266">266</div>
              <div class="grid-item computerLabGrid" id="box267">267</div>
              <div class="grid-item room4Grid lightPath" id="box268">268</div>
              <div class="grid-item room4Grid" id="box269">269</div>
              <div class="grid-item room4Grid" id="box270">270</div>
              <div class="grid-item room4Grid" id="box271">271</div>
              <div class="grid-item room5Grid" id="box272">272</div>
              <div class="grid-item room5Grid right-border" id="box273">273</div>
              <div class="grid-item room5Grid lightPath" id="box274">274</div>
              <div class="grid-item room5Grid" id="box275">275</div>
              <div class="grid-item mainRoomGrid" id="box276">276</div>
              <div class="grid-item mainRoomGrid lightPath" id="box277">277</div>
              <div class="grid-item mainRoomGrid lightPath" id="box278">278</div>
              <div class="grid-item mainRoomGrid lightPath" id="box279">279</div>
              <div class="grid-item mainRoomGrid lightPath" id="box280">280</div>
              <div class="grid-item mainRoomGrid lightPath" id="box281">281</div>
              <div class="grid-item mainRoomGrid lightPath" id="box282">282</div>
              <div class="grid-item mainRoomGrid lightPath" id="box283">283</div>
              <div class="grid-item mainRoomGrid" id="box284">284</div>
              <div class="grid-item mainRoomGrid" id="box285">285</div>
              <div class="grid-item mainRoomGrid" id="box286">286</div>
              <div class="grid-item computerLabGrid" id="box287">287</div>
              <div class="grid-item computerLabGrid" id="box288">288</div>
              <div class="grid-item computerLabGrid" id="box289">289</div>
              <div class="grid-item computerLabGrid" id="box290">290</div>
              <div class="grid-item computerLabGrid lightPath" id="box291">291</div>
              <div class="grid-item computerLabGrid" id="box292">292</div>
              <div class="grid-item computerLabGrid" id="box293">293</div>
              <div class="grid-item room4Grid" id="box294">294</div>
              <div class="grid-item room4Grid" id="box295">295</div>
              <div class="grid-item room4Grid" id="box296">296</div>
              <div class="grid-item room4Grid" id="box297">297</div>
              <div class="grid-item room5Grid" id="box298">298</div>
              <div class="grid-item room5Grid right-border" id="box299">299</div>
              <div class="grid-item room5Grid" id="box300">300</div>
              <div class="grid-item room5Grid" id="box301">301</div>
              <div class="grid-item mainRoomGrid" id="box302">302</div>
              <div class="grid-item mainRoomGrid" id="box303">303</div>
              <div class="grid-item mainRoomGrid" id="box304">304</div>
              <div class="grid-item mainRoomGrid" id="box305">305</div>
              <div class="grid-item mainRoomGrid" id="box306">306</div>
              <div class="grid-item mainRoomGrid" id="box307">307</div>
              <div class="grid-item mainRoomGrid" id="box308">308</div>
              <div class="grid-item mainRoomGrid" id="box309">309</div>
              <div class="grid-item mainRoomGrid" id="box310">310</div>
              <div class="grid-item mainRoomGrid" id="box311">311</div>
              <div class="grid-item mainRoomGrid" id="box312">312</div>
              <div class="grid-item computerLabGrid" id="box313">313</div>
              <div class="grid-item computerLabGrid" id="box314">314</div>
              <div class="grid-item computerLabGrid" id="box315">315</div>
              <div class="grid-item computerLabGrid" id="box316">316</div>
              <div class="grid-item computerLabGrid" id="box317">317</div>
              <div class="grid-item computerLabGrid" id="box318">318</div>
              <div class="grid-item computerLabGrid" id="box319">319</div>
              <div class="grid-item room4Grid" id="box320">320</div>
              <div class="grid-item room4Grid" id="box321">321</div>
              <div class="grid-item room4Grid" id="box322">322</div>
              <div class="grid-item room4Grid" id="box323">323</div>
              <div class="grid-item room5Grid" id="box324">324</div>
              <div class="grid-item room5Grid right-border" id="box325">325</div>
              <div class="grid-item room5Grid" id="box326">326</div>
              <div class="grid-item room5Grid" id="box327">327</div>
              <div class="grid-item mainRoomGrid" id="box328">328</div>
              <div class="grid-item mainRoomGrid" id="box329">329</div>
              <div class="grid-item mainRoomGrid" id="box330">330</div>
              <div class="grid-item mainRoomGrid" id="box331">331</div>
              <div class="grid-item mainRoomGrid" id="box332">332</div>
              <div class="grid-item mainRoomGrid" id="box333">333</div>
              <div class="grid-item mainRoomGrid" id="box334">334</div>
              <div class="grid-item mainRoomGrid" id="box335">335</div>
              <div class="grid-item mainRoomGrid" id="box336">336</div>
              <div class="grid-item mainRoomGrid" id="box337">337</div>
              <div class="grid-item mainRoomGrid" id="box338">338</div>

            </div>
          </div>
          <div class="spacer"></div> <!-- creates blank space between divs-->
          <div class="view-panel">
            <div class="nonEmergencyContent" id="nonEmergencyContent">
              <h2>Emergency Information will be displayed here</h2>
              <span>all systems normal</span>
            </div>
            <div class="emergencyContent" id="emergencyContent">
              <div class="leftColumn">
                <ul style="list-style-type:none;">Room On Fire: Christine's Office<br>
                    <li>People in the room: 1</li>
                    <li>Sprinklers: active</li>
                    <li>Doors: unlocked</li>
                    <li>Smoke in the room: yes</li>
                </ul>
              </div>
              <div class ="rightColumn">
                  <button id="callRoom2" onclick="callRoomText();">Call Room</button>
                  <button id ="lockRoom">Lock Room</button>
              </div>
            </div>
          </div>
        </div>
        <div class="spacer"></div> <!-- creates blank space between divs-->

        <div class="right">
          <h3>Building Zones</h3>
          <img id="zonepic" src="images/zones.png" >
          <div class="spacer"></div>
          <div class="zoneBox">
            <div id="diagnostics" onclick="runDiagnostics();">Run Diagnostics</div>
            <div id="zoneList">
              <select class="div-toggle" data-target=".my-info-1">
                <option value="room1" data-show=".room1">Christine's Office</option>
                <option value="room2" data-show=".room2">Gordon's Office</option>
                <option value="room3" data-show=".room3">Art Room</option>
                <option value="room4" data-show=".room4">Carol's Office</option>
                <option value="room5" data-show=".room5">Office</option>
                <option value="room6" data-show=".room6">Kitchen</option>
                <option value="room7" data-show=".room7">Meeting Room</option>
                <option value="room8" data-show=".room8">Classroom</option>
                <option value="room9" data-show=".room9">Computer Lab</option>
                <option value="room10" data-show=".room10">Middle Room</option>
                <option value="room11" data-show=".room11">Main Room</option>
                <option value="room12" data-show=".room12">Girl Bathroom</option>
                <option value="room13" data-show=".room13">Boy Bathroom</option>
                <option value="room14" data-show=".room14">Work Areas</option>
              </select><br>

              <div class="my-info-1">
                <div class="room1 hide">name: "Christine's Office"<br>
                    zone: 1 <br>
                    maxCapacity: 8 <br>
                    isEmpty: false<br>
                    humanPresence: 1<br>
                    lockStatus: false<br>
                    heatSensor: true<br>
                    heatSensorStatus: true<br>
                    motionSensor: true<br>
                    motionSensorStatus: true<br>
                    fumesSensor: true<br>
                    fumesSensorStatus: true<br>
                    sprinklers: true<br>
                    alarm: true<br>
                    sprinklerStatus: true<br>
                    phone: true</div>
                <div class="room2 hide">name: "Gordon's Office"<br>
                    zone: 1<br>
                    maxCapacity: 8<br>
                    isEmpty: false<br>
                    humanPresence: 1<br>
                    lockStatus: false<br>
                    heatSensor: true<br>
                    heatSensorStatus: true<br>
                    motionSensor: true<br>
                    motionSensorStatus: true<br>
                    fumesSensor: true<br>
                    alarm: true<br>
                    fumesSensorStatus: true<br>
                    sprinklers: true<br>
                    sprinklerStatus: true<br>
                    phone: true</div>
                <div class="room3 hide">name: "Art Room/ Outreach Classroom"<br>
                    zone: 1<br>
                    maxCapacity: 8<br>
                    isEmpty: false<br>
                    humanPresence: 4<br>
                    alarm: true<br>
                    lockStatus: false<br>
                    heatSensor: true<br>
                    heatSensorStatus: true<br>
                    motionSensor: true<br>
                    motionSensorStatus: true<br>
                    fumesSensor: true<br>
                    fumesSensorStatus: true<br>
                    sprinklers: true<br>
                    sprinklerStatus: true<br>
                    phone: true</div>
                <div class="room4 hide">name: "Carol's Office"<br>
                    zone: 3<br>
                    maxCapacity: 8<br>
                    isEmpty: false<br>
                    humanPresence: 1<br>
                    alarm: true<br>
                    lockStatus: false<br>
                    heatSensor: true<br>
                    heatSensorStatus: true<br>
                    motionSensor: true<br>
                    motionSensorStatus: true<br>
                    fumesSensor: true<br>
                    fumesSensorStatus: true<br>
                    sprinklers: true<br>
                    sprinklerStatus: true<br>
                    phone: true</div>
                <div class="room5 hide">name: "General Use Office"<br>
                    zone: 4<br>
                    maxCapacity: 8<br>
                    isEmpty: true<br>
                    humanPresence: 0<br>
                    alarm: true<br>
                    lockStatus: false<br>
                    heatSensor: true<br>
                    heatSensorStatus: true<br>
                    motionSensor: true<br>
                    motionSensorStatus: true<br>
                    fumesSensor: true<br>
                    fumesSensorStatus: true<br>
                    sprinklers: true<br>
                    sprinklerStatus: true<br>
                    phone: true </div>
                <div class="room6 hide">name: "Kitchen"<br>
                    zone: 1<br>
                    maxCapacity: 8<br>
                    isEmpty: false<br>
                    alarm: true<br>
                    humanPresence: 2<br>
                    lockStatus: false<br>
                    heatSensor: true<br>
                    heatSensorStatus: true<br>
                    motionSensor: true<br>
                    motionSensorStatus: true<br>
                    fumesSensor: true<br>
                    fumesSensorStatus: true<br>
                    sprinklers: true<br>
                    sprinklerStatus: true<br>
                    phone: false</div>
                <div class="room7 hide">name: "Meeting/Tutoring Room"<br>
                    zone: 1<br>
                    maxCapacity: 8<br>
                    isEmpty: true<br>
                    humanPresence: 0<br>
                    alarm: true<br>
                    lockStatus: false<br>
                    heatSensor: true<br>
                    heatSensorStatus: true<br>
                    motionSensor: true<br>
                    motionSensorStatus: true<br>
                    fumesSensor: true<br>
                    fumesSensorStatus: true<br>
                    sprinklers: true<br>
                    sprinklerStatus: true<br>
                    phone: true </div>
                <div class="room8 hide">name: "Outreach Classroom"<br>
                    zone: 2<br>
                    maxCapacity: 20<br>
                    isEmpty: true<br>
                    humanPresence: 0<br>
                    lockStatus: false<br>
                    alarm: true<br>
                    heatSensor: true<br>
                    heatSensorStatus: true<br>
                    motionSensor: true<br>
                    motionSensorStatus: true<br>
                    fumesSensor: true<br>
                    fumesSensorStatus: true<br>
                    sprinklers: true<br>
                    sprinklerStatus: true<br>
                    phone: true</div>
                <div class="room9 hide">name: "Outreach/Computer Lab"<br>
                    zone: 2<br>
                    maxCapacity: 20<br>
                    isEmpty: true<br>
                    humanPresence: 0<br>
                    lockStatus: false<br>
                    alarm: true<br>
                    heatSensor: true<br>
                    heatSensorStatus: true<br>
                    motionSensor: true<br>
                    motionSensorStatus: true<br>
                    fumesSensor: true<br>
                    fumesSensorStatus: true<br>
                    sprinklers: true<br>
                    sprinklerStatus: true<br>
                    phone: true </div>
                <div class="room10 hide">name: "Middle Room & Music Room"<br>
                    zone: 4<br>
                    maxCapacity: 50<br>
                    isEmpty: false<br>
                    humanPresence: 5<br>
                    alarm: true<br>
                    lockStatus: false<br>
                    heatSensor: true<br>
                    heatSensorStatus: true<br>
                    motionSensor: true<br>
                    motionSensorStatus: true<br>
                    fumesSensor: true<br>
                    fumesSensorStatus: true<br>
                    sprinklers: true<br>
                    sprinklerStatus: true<br>
                    phone: true </div>
                <div class="room11 hide">name: "Main Room"<br>
                    zone: 4<br>
                    maxCapacity: 50<br>
                    isEmpty: false<br>
                    alarm: true<br>
                    humanPresence: 8<br>
                    lockStatus: false<br>
                    heatSensor: true<br>
                    heatSensorStatus: true<br>
                    motionSensor: true<br>
                    motionSensorStatus: true<br>
                    fumesSensor: true<br>
                    fumesSensorStatus: true<br>
                    sprinklers: true<br>
                    sprinklerStatus: true<br>
                    phone: true</div>
                <div class="room12 hide">name: "Ladies Bathroom"<br>
                    zone: 2<br>
                    maxCapacity: 6<br>
                    alarm: true<br>
                    isEmpty: true<br>
                    humanPresence: 0<br>
                    lockStatus: false<br>
                    heatSensor: true<br>
                    heatSensorStatus: true<br>
                    motionSensor: true<br>
                    motionSensorStatus: true<br>
                    fumesSensor: true<br>
                    fumesSensorStatus: true<br>
                    sprinklers: true<br>
                    sprinklerStatus: true<br>
                    phone: false </div>
                <div class="room13 hide">Citrus is...</div>
                <div class="room13 hide">name: "Lad's Bathroom"<br>
                    zone: 2<br>
                    maxCapacity: 6<br>
                    isEmpty: true<br>
                    humanPresence: 0<br>
                    lockStatus: false<br>
                    heatSensor: true<br>
                    heatSensorStatus: true<br>
                    motionSensor: true<br>
                    motionSensorStatus: true<br>
                    fumesSensor: true<br>
                    fumesSensorStatus: true<br>
                    sprinklers: true<br>
                    sprinklerStatus: true<br>
                    phone: false<br>
                    alarm: true</div>
                <div class="room14 hide">name: "Student work areas"<br>
                    zone: 2<br>
                    maxCapacity: 10<br>
                    isEmpty: true<br>
                    humanPresence: 0<br>
                    lockStatus: false<br>
                    heatSensor: true<br>
                    heatSensorStatus: true<br>
                    motionSensor: true<br>
                    motionSensorStatus: true<br>
                    fumesSensor: true<br>
                    fumesSensorStatus: true<br>
                    sprinklers: true<br>
                    sprinklerStatus: true<br>
                    phone: true<br>
                    alarm: true</div>

              </div>

            </div>
          </div>
        </div>

          <!-- Testing -->
          <!--code for login popup-->
      <div class='popup911'>
        <div class='stylesE'>
        <h1>EMERGENCY SERVICES HAVE BEEN CALLED</h1>
        <h1>PLEASE EVACUATE THE BUILDING</h1>

        </div>
      </div>
      <!--END code for login popup-->

    </div>
    <script src="JS/scripts.js"></script>
  </body>
</html>
