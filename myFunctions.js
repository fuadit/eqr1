const propertiesDetails = {
  1: {
    title: "شقة 3 غرف نوم",
    description:
      "مساحة 150 متر مربع، طابق 3، مع شرفة واسعة. تشمل جميع الخدمات.",
    imageUrl1: "images/1.jpeg",
    imageUrl2: "images/2.jpeg",
    imageUrl3: "images/3.jpeg",
  },
  2: {
    title: "فيلا 4 غرف نوم",
    description: "مساحة 300 متر مربع، حديقة خاصة، 5 حمامات. مناسبة للعائلات.",
    imageUrl1: "images/4.jpg",
    imageUrl2: "images/5.jpg",
    imageUrl3: "images/6.jpg",
  },
  3: {
    title: "شقة 3 غرف نوم",
    description:
      "مساحة 150 متر مربع، طابق 3، مع شرفة واسعة. تشمل جميع الخدمات.",
    imageUrl1: "images/1.jpeg",
    imageUrl2: "images/2.jpeg",
    imageUrl3: "images/3.jpeg",
  },
  4: {
    title: "فيلا 4 غرف نوم",
    description: "مساحة 300 متر مربع، حديقة خاصة، 5 حمامات. مناسبة للعائلات.",
    imageUrl1: "images/4.jpg",
    imageUrl2: "images/5.jpg",
    imageUrl3: "images/6.jpg",
  },
  5: {
    title: "شقة 3 غرف نوم",
    description:
      "مساحة 150 متر مربع، طابق 3، مع شرفة واسعة. تشمل جميع الخدمات.",
    imageUrl1: "images/1.jpeg",
    imageUrl2: "images/2.jpeg",
    imageUrl3: "images/3.jpeg",
  },
  6: {
    title: "فيلا 4 غرف نوم",
    description: "مساحة 300 متر مربع، حديقة خاصة، 5 حمامات. مناسبة للعائلات.",
    imageUrl1: "images/4.jpg",
    imageUrl2: "images/5.jpg",
    imageUrl3: "images/6.jpg",
  },
  7: {
    title: "شقة 3 غرف نوم",
    description:
      "مساحة 150 متر مربع، طابق 3، مع شرفة واسعة. تشمل جميع الخدمات.",
    imageUrl1: "images/1.jpeg",
    imageUrl2: "images/2.jpeg",
    imageUrl3: "images/3.jpeg",
  },
  8: {
    title: "فيلا 4 غرف نوم",
    description: "مساحة 300 متر مربع، حديقة خاصة، 5 حمامات. مناسبة للعائلات.",
    imageUrl1: "images/4.jpg",
    imageUrl2: "images/5.jpg",
    imageUrl3: "images/6.jpg",
  },
  9: {
    title: "شقة 3 غرف نوم",
    description:
      "مساحة 150 متر مربع، طابق 3، مع شرفة واسعة. تشمل جميع الخدمات.",
    imageUrl1: "images/1.jpeg",
    imageUrl2: "images/2.jpeg",
    imageUrl3: "images/3.jpeg",
  },
  10: {
    title: "فيلا 4 غرف نوم",
    description: "مساحة 300 متر مربع، حديقة خاصة، 5 حمامات. مناسبة للعائلات.",
    imageUrl1: "images/4.jpg",
    imageUrl2: "images/5.jpg",
    imageUrl3: "images/6.jpg",
  },
};

function showDetails(detailsId) {
  const propertyDetails = propertiesDetails[detailsId];
  const detailsElement = document.getElementById("detailsElement" + detailsId);
  detailsElement.innerHTML = `
            <div class="property-details">
                <h3>${propertyDetails.title}</h3>
                <img style="width: 100px; height:100px;" src="${propertyDetails.imageUrl1}" alt="${propertyDetails.title}">
                <img style="width: 100px; height:100px;" src="${propertyDetails.imageUrl2}" alt="${propertyDetails.title}">
                <img style="width: 100px; height:100px;" src="${propertyDetails.imageUrl3}" alt="${propertyDetails.title}">
                <p>${propertyDetails.description}</p>
            </div>
        `;

  detailsElement.open = true;
}

function toggleRentalForm() {
  var rentalForm = document.getElementById("rental-form");
  rentalForm.style.display = "block";
}

function generateCaptcha() {
  var captcha = Math.random().toString(36).substr(2, 6).toUpperCase();
  document.getElementById("captcha").textContent = captcha;
}

function verifyCaptcha() {
  var userCaptcha = document.getElementById("user-captcha").value.toUpperCase();
  var captcha = document.getElementById("captcha").textContent;

  if (userCaptcha === captcha) {
    let message = "";

    const selectedRows = document.querySelectorAll("tr[id]");
    selectedRows.forEach((row) => {
      const checkbox = row.querySelector('input[type="checkbox"]');
      const price = row.querySelector("td:nth-child(3)").innerHTML;
      const title = row.querySelector("td:nth-child(2)").innerHTML;
      if (checkbox) {
        if (checkbox.checked) {
          message += "\n" + title + " :: " + price;
        }
      }
    });
    alert(message);

    return true;
  } else {
    alert("تحقق من Captcha فشل!");
    return false;
  }
}
