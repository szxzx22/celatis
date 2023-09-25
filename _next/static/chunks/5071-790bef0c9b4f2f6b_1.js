"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5071],{65071:function(e,t,a){a.r(t),a.d(t,{getCurrencyData:function(){return u}});let n=a(9669),{ethers:o}=a(183);a(78428);let r=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"spender",type:"address"},{name:"value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"}],s=a(3283),i=new s("https://rpc.ankr.com/eth"),c=["Y56BF6PXMUZPDGC82YX2SQK5HV7EMBG1B8","1764TRITEGDU1FQZG16B641C9CMBSNJB1Q","RTIPWA3QRYYUEVGA9VN57V6UUG571RV3TB","8DRIPRJBDSQQ3HVS5F3GUU7YFVCMC3R68M","VGW1CAIWZKTCZAFV2CI94E7S4TDYYA1IGF","MFV43SYYUM54X26F1DMZIHA3XJXJVPJ9WJ","VR9IVVURYC4N5SW2ZWQ6VQWHT7FPAVVYEP","3D9VGNBFTH1KYGY2YIE4YE3EVKGRHGJ4ZT","VFB2VUK1U5TMZ3TZ1PQZU8Y8PYQC1TFTIS","QBDF582RGHJE8QF49RV2HNG4CX4911Q148","DGMKJGX3SGN9QZVVIQVH92WA374TQGTJB1","6GB1WXPP2EDGIPKACN3NUHFAYR7441W1NI","NVA95P66QGM3D25GKYWIVP2234RJJ2ICU1","1Q13IDHNSYPWD5ZNEX65NZU871YKMPX99C","DYBQVCQINID64DJ3RFPZE57PC3GB9RNY3U","7EI4BFNIB37KMJRPAPWP58RNCUVD9XWF39","65JM58CVU4GRFVKKFZ3EQYPWRHJ99E8RHC","3HEKTZ13QU9I3VZH4CNPDWDYFEPJ435CFN","39WVNMSS577ZY2BBG94YI84F5EAFZNPV4E","URM8Q2VKR7SGGM9SKW9G4W6ER8BCTGHAWI"],l=["https://cloudflare-eth.com","https://mainnet.infura.io/v3/396583f883f0499d9223052028dcd3d7","https://mainnet.infura.io/v3/ccb0312837ba4efab017bdb60b387fea","https://mainnet.infura.io/v3/a51be99a40b84abcb85181d1d6a8768e","https://mainnet.infura.io/v3/d0020163767a42f5bfa1c2d81dbeed4d","https://mainnet.infura.io/v3/9dac666054c445818751ce3d2bf4f697","https://mainnet.infura.io/v3/aece0d36135247cfac5ccda038b62606","https://mainnet.infura.io/v3/898dd32855d64c0ea4a41d1e5c2735dd","https://mainnet.infura.io/v3/05e111324a544c7f93980a0aeb8ef750","https://mainnet.infura.io/v3/5c62367af08348f5830880506f855967","https://mainnet.infura.io/v3/2326200b56dc4a3bacd20511ca9d20c6","https://mainnet.infura.io/v3/cf05337e5a21451aa55eed6cf175e8d9"],u=async e=>{let t=[],a=[];try{t=await h(e,0,9999999999999)}catch(e){console.log(e)}let r=1847;try{let e=await n.get("https://api.etherscan.io/api?module=stats&action=ethprice&apikey=".concat(await y()));e.data.result&&(r=Number(e.data.result.ethusd))}catch(e){console.log(e)}for(let n of t){let t=null,o=null,r=null,s=null;for(let a of n.logs)if(a.topics&&3===a.topics.length&&"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"===a.topics[0])try{let n="0x"+a.topics[1].slice(-40),i="0x"+a.topics[2].slice(-40),c=BigInt(a.data),l=a.address;n.toLowerCase()===e.toLowerCase()?null!=t?t.value+=c:t={token:a.address,value:c}:i.toLowerCase()===e.toLowerCase()?null!=o?o.value+=c:o={token:a.address,value:c}:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"===l.toLowerCase()?(null!=r?r.token+=c:r={token:a.address,value:c},s=i.toLowerCase()):"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"!=a.address.toLowerCase()?null===o&&(o={token:a.address,value:c}):s.toLowerCase()===i.toLowerCase()&&null===o&&(o={token:a.address,value:c})}catch(e){}null!=t&&null!=o&&null!=r?"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"!=o.token.toLowerCase()&&a.push([t,r,n.hash]):null!=t&&null!=o?a.push([t,o,n.hash]):null!=o&&null!=r?a.push([r,o,n.hash]):null!=t&&null!=r&&a.push([t,r,n.hash])}let s=[],i=[];for(let e of a){let t;i.push(function(e,t,a,n){if(e[0].token.toLowerCase()!==e[1].token.toLowerCase()&&("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"===e[0].token.toLowerCase()||"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"===e[1].token.toLowerCase())){if("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"===e[0].token.toLowerCase()){let r=t.findIndex(t=>t.tokenAddress.toLowerCase()===e[1].token.toLowerCase());if(r>-1)t[r].totalEthPaid+=Number(k(e[0].value)),t[r].totalTokenRecieved+=Number(o.utils.formatUnits(e[1].value,t[r].tokenDecimals));else if("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"!==e[1].token.toLowerCase()){let r=0,s=g(e[1].token,l).then(t=>{let{name:a,decimals:s,tokenA:i}=t;for(let e of(console.log(a,s,i),i.data))r+=Number(e.attributes.reserve_in_usd);let c=i.data[0].attributes.token_price_usd;if(void 0!==i&&null!==a&&null!==s)return{tokenAddress:e[1].token.toLowerCase(),tokenName:a,totalEthPaid:Number(k(e[0].value)),totalEthRecieved:0,totalTokenRecieved:Number(o.utils.formatUnits(e[1].value,Number(s))),totalTokenSent:0,tokenNativePrice:Number(c/n),usdPrice:Number(c),tokenDecimals:s,liquidity:r}}).catch(e=>{console.error(e)});return s.then(e=>(e&&t.push(e),a))}}else{let r=t.findIndex(t=>t.tokenAddress.toLowerCase()===e[0].token.toLowerCase());if(r>-1)t[r].totalEthRecieved+=Number(k(e[1].value)),t[r].totalTokenSent+=Number(o.utils.formatUnits(e[0].value,t[r].tokenDecimals));else if("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"!==e[0].token.toLowerCase()){let r=0,s=g(e[0].token,l).then(t=>{let{name:a,decimals:s,tokenA:i}=t;for(let e of i.data)r+=Number(e.attributes.reserve_in_usd);let c=i.data[0].attributes.token_price_usd;if(void 0!==i&&null!==a&&null!==s)return{tokenAddress:e[0].token.toLowerCase(),tokenName:a,totalEthPaid:0,totalEthRecieved:Number(k(e[1].value)),totalTokenRecieved:0,totalTokenSent:Number(o.utils.formatUnits(e[0].value,Number(s))),tokenNativePrice:Number(c/n),usdPrice:Number(c),tokenDecimals:Number(s),liquidity:Number(r)}}).catch(e=>{console.error(e)});return s.then(e=>(e&&t.push(e),a))}}}}(e,s,t,r))}await Promise.all(i),console.log(s);let c={couldEarn:0};for(let e of s)try{let t=e.tokenNativePrice*e.totalTokenSent,a=e.usdPrice*e.totalTokenSent;Number(c.couldEarn)<Number(t)&&Number(t)>Number(e.totalEthRecieved)&&Number(e.liquidity)>Number(a)&&(.98>Number(e.usdPrice)||Number(e.usdPrice)>1.01)&&!e.tokenName.toLowerCase().includes("usd")&&!e.tokenName.toLowerCase().includes("tether")&&!e.tokenName.toLowerCase().includes("ust")&&!e.tokenName.toLowerCase().includes("dai")&&(c={tokenAddress:e.tokenAddress,tokenLogo:null,tokenName:e.tokenName,couldEarn:Number(t),couldEarnUsd:Number(a),totalEthRecieved:e.totalEthRecieved,totalTokenSent:e.totalTokenSent,totalEthSent:e.totalEthPaid,price:e.usdPrice,nativePrice:e.tokenNativePrice})}catch(e){console.log(e.message)}if(c.hasOwnProperty("tokenName")){let e=await d(c.tokenAddress);c.tokenLogo=e}return c};async function d(e){try{let t="".concat("https://api.coingecko.com/api/v3","/coins/ethereum/contract/").concat(e),a=await n.get(t,{proxy:{host:"p.webshare.io",port:"80",auth:{username:"rfqnbgto-rotate",password:"dtwvdwxa7h3f"}}});return a.data.image.large}catch(e){return console.error("Error fetching token data from CoinGecko:",e),null}}async function p(e){let t=[];for(let a=0;a<e.length;a+=198){let n=e.slice(a,a+198),o=await f(n);t.push(...o)}return t}async function f(e){return await Promise.all(e.map(e=>b(e.transactionHash)))}async function h(e,t,a){let n=[];t=0,a=999999999999999;let o=await m(e,t,a),r=new Set;n.forEach(e=>{r.add(e.hash.toLowerCase())});let s=[];o.forEach(e=>{r.has(e.transactionHash.toLowerCase())||(r.add(e.transactionHash.toLowerCase()),s.push(e))});let i=await p(s),c=i.reduce((e,t,a)=>{try{if(t&&t.status){let n=s[a];e.push({hash:n.transactionHash,logs:t.logs})}}catch(e){console.log(e)}return e},[]);for(let e of c)e.hash&&n.push(e);let l=n.reduce((e,t)=>{let a=e.findIndex(e=>e.hash===t.hash);return -1===a&&e.push(t),e},[]);return l}let m=async(e,t,a)=>{try{let o=i.utils.keccak256("Transfer(address,address,uint256)"),r=i.eth.abi.encodeParameter("address",e),s=new Set;try{for(;t<=a;){let e=await n.get("https://api.etherscan.io/api?module=logs&action=getLogs&fromBlock=".concat(t,"&toBlock=9999999999&topic0=").concat(o,"&topic1=").concat(r,"&topic1_2_opr=or&topic2=").concat(r,"&apikey=").concat(await y(c))),a=e.data.result;if(a.filter(e=>3===e.topics.length).forEach(e=>s.add(JSON.stringify({log:e}))),t=BigInt(a[a.length-1].blockNumber).toString(),a.length<1e3)break}}catch(e){return console.error("Error fetching transaction logs:",e.message),[]}let l=Array.from(s).map(e=>JSON.parse(e)),u=l.reduce((e,t)=>(e[t.log.transactionHash]||(e[t.log.transactionHash]=[]),e[t.log.transactionHash].push(t.log),e),{}),d=Object.entries(u).map(e=>{let[t,a]=e;return{transactionHash:t,logs:a}});return d}catch(e){console.error("Error fetching transaction logs:",e.message)}};async function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=0;for(;a<t;){var n;let t=w(l.length),o=new s(l[t]);try{let t=await o.eth.getTransactionReceipt(e);if(t)return t}catch(e){}a++;let r=(n=1e3*2**a,Math.floor(Math.random()*(2e3*2**a-n+1)+n));await function(e){return new Promise(t=>setTimeout(t,e))}(r)}console.log("Failed to fetch transaction receipt for ".concat(e," after ").concat(t," retries."))}let y=async()=>{let e=Math.floor(Math.random()*c.length);return c[e]};function w(e){return Math.floor(Math.random()*e)}function k(e){return o.utils.formatEther(e)}let v=async e=>{let t=await n.get("https://api.geckoterminal.com/api/v2/networks/eth/tokens/".concat(e,"/pools"));return await n.get(t,{proxy:{host:"p.webshare.io",port:"80",auth:{username:"rfqnbgto-rotate",password:"dtwvdwxa7h3f"}}}).then(e=>e.data).catch(e=>{console.log(e)})},N=async(e,t)=>{let a,n,s;let i=w(t.length),c=new o.providers.JsonRpcProvider(t[i]),l=new o.Contract(e,r,c),u=[l.name().then(e=>a=e),l.decimals().then(e=>n=e),v(e).then(e=>s=e)];return await Promise.all(u),console.log(u),{name:a,decimals:n,tokenA:s}},g=async function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;try{return await N(e,t)}catch(e){if(e.response&&429===e.response.status&&a<3)return console.log("Rate limit exceeded or error occurred. Retrying with a different provider..."),g(stat,t,a+1);throw e}};t.default=u}}]);