function getDateTime(){var e=new Date,a=e.getHours(),t=e.getMinutes(),o=e.getSeconds();return 1==a.toString().length&&(a="0"+a),1==t.toString().length&&(t="0"+t),1==o.toString().length&&(o="0"+o),a+":"+t+":"+o}function gmod(e,a){return(e%a+a)%a}function kuwaiticalendar(e){var t=new Date;e&&(adjustmili=864e5*e,todaymili=t.getTime()+adjustmili,t=new Date(todaymili)),day=t.getDate(),month=t.getMonth(),year=t.getFullYear(),m=month+1,y=year,m<3&&(--y,m+=12),a=Math.floor(y/100),b=2-a+Math.floor(a/4),y<1583&&(b=0),1582==y&&(10<m&&(b=-10),10==m&&(b=0,4<day&&(b=-10))),jd=Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524,b=0,2299160<jd&&(a=Math.floor((jd-1867216.25)/36524.25),b=1+a-Math.floor(a/4)),bb=jd+b+1524,cc=Math.floor((bb-122.1)/365.25),dd=Math.floor(365.25*cc),ee=Math.floor((bb-dd)/30.6001),day=bb-dd-Math.floor(30.6001*ee),month=ee-1,13<ee&&(cc+=1,month=ee-13),year=cc-4716,wd=e?gmod(jd+1-e,7)+1:gmod(jd+1,7)+1,iyear=10631/30,epochastro=1948084,epochcivil=1948085,shift1=.1335,z=jd-epochastro,cyc=Math.floor(z/10631),z-=10631*cyc,j=Math.floor((z-shift1)/iyear),iy=30*cyc+j,z-=Math.floor(j*iyear+shift1),im=Math.floor((z+28.5001)/29.5),13==im&&(im=12),id=z-Math.floor(29.5001*im-29);var o=new Array(8);return o[0]=day,o[1]=month-1,o[2]=year,o[3]=jd-1,o[4]=wd-1,o[5]=id,o[6]=im-1,o[7]=iy,o}function writeIslamicDate(e){var a=new Array("Ahad","Ithnin","Thulatha","Arbaa","Khams","Jumuah","Sabt"),t=new Array("Muharram","Safar","Rabi'ul Awwal","Rabi'ul Akhir","Jumadal Ula","Jumadal Akhira","Rajab","Sha'ban","Ramadan","Shawwal","Dhul Qa'ada","Dhul Hijja"),o=kuwaiticalendar(e);return a[o[4]]+", "+o[5]+" "+t[o[6]]+" "+o[7]+" H"}function time_remaining(e){var a=Date.parse(e)-Date.parse(new Date),t=Math.floor(a/1e3%60),o=Math.floor(a/1e3/60%60),r=Math.floor(a/36e5%24);return{total:a,days:Math.floor(a/864e5),hours:r,minutes:o,seconds:t}}function run_clock(e,a){var t=document.getElementById(e),o=t.querySelector(".clock-day"),r=t.querySelector(".clock-hours"),n=t.querySelector(".clock-minutes"),l=t.querySelector(".clock-seconds");function c(){var e=time_remaining(a);o.innerHTML=e.days,r.innerHTML=("0"+e.hours).slice(-2),n.innerHTML=("0"+e.minutes).slice(-2),l.innerHTML=("0"+e.seconds).slice(-2),e.total<=0&&(clearInterval(i),document.querySelector(".clock-day").innerHTML="D",document.querySelector(".clock-hours").innerHTML="O",document.querySelector(".clock-minutes").innerHTML="N",document.querySelector(".clock-seconds").innerHTML="E")}c();var i=setInterval(c,500)}