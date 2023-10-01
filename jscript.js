import {dataInfo} from "./data.js";

const data = JSON.parse(dataInfo);
const title = document.createElement("div");
const titleDesc = document.createElement("h1");
titleDesc.style.display = "flex";
titleDesc.style.justifyContent = "center";
titleDesc.style.alignItems = "center";

title.appendChild(titleDesc);
const divElem = document.createElement("div");
document.body.appendChild(title);
document.body.appendChild(divElem);
titleDesc.textContent = 'Текущая погода';
divElem.style.display = "flex";
divElem.style.justifyContent = "center";
divElem.style.flexWrap = "wrap";
divElem.style.gap = "20px";


data.forEach(({
                  city,
                  image,
                  temperature,
                  humidity,
                  wind_kph,
                  condition= {text, icon, code},
                  air_quality= {co, no2, o3, so2}
              }) => {
    const cartBox = document.createElement('div');
    cartBox.classList.add("city");
    cartBox.style.marginRight = "10px";
    cartBox.style.display = "inline-block";
    // cartBox.style.border = "1px solid red";
    cartBox.style.padding = "10px";
    cartBox.style.boxShadow = "14px 23px 20px rgba(0,0,0,0.17)";
    cartBox.style.gap = "10px";
    const cartImg = document.createElement('img');
    cartImg.src = image;
    cartImg.width = 500;
    const cartDesc = document.createElement('div');
    const cartDescName = document.createElement('h3');
    const cartDescTemperature = document.createElement('p');
    const cartDescHumidity = document.createElement('p');
    const cartDescWindKph = document.createElement('p');
    const cartDescCondition = document.createElement('div');
    const cartDescConditionText = document.createElement('p');
    cartDescConditionText.textContent = `Condition : ${condition.text}`;
    const cartDescConditionIcon = document.createElement('img');
    cartDescConditionIcon.src = condition.icon;
    cartDescConditionIcon.width = 40;
    cartDescConditionIcon.alt = "Condition.icon";
    const cartDescAirQuality = document.createElement('div');
    cartDescAirQuality.textContent =
        `Air Quality : CO = ${air_quality.co} / NO2 = ${air_quality.no2} / O3 = ${air_quality.o3} / SO2 = ${air_quality.so2}`;
    cartDescName.textContent = `City: ${city}`;
    cartDescName.style.margin = "10px 0px 10px";
    cartDescTemperature.textContent = `Temperatura : ${temperature} C / Humidity :${humidity} %`;
    cartDescWindKph.textContent = `Wind :${wind_kph} kph. / Condition sky : ${condition.text}`;
    cartDescWindKph.appendChild(cartDescConditionIcon);
    cartDescWindKph.style.display = "flex";
    cartDescWindKph.style.alignItems = "center";
    cartDesc.append(cartDescName, cartDescTemperature,cartDescHumidity, cartDescWindKph, cartDescAirQuality  );
    cartBox.appendChild(cartImg);
    cartBox.appendChild(cartDesc);
    divElem.appendChild(cartBox);
})