const WHATSAPP = "8801688901806";
const PAYMENT_NUMBER = "01688901806";

document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const value = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      const old = btn.textContent;
      btn.textContent = "Copied ✓";
      setTimeout(() => btn.textContent = old, 1400);
    } catch {
      alert("Payment number: " + value);
    }
  });
});

document.getElementById("enrollForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const student = document.getElementById("studentName").value.trim();
  const guardian = document.getElementById("guardianName").value.trim();
  const whatsapp = document.getElementById("whatsappNumber").value.trim();
  const method = document.getElementById("paymentMethod").value;
  const trx = document.getElementById("transactionId").value.trim();
  const sender = document.getElementById("senderNumber").value.trim();
  const msg = document.getElementById("formMessage");

  if (!student || !whatsapp || !method || !trx || !sender) {
    msg.textContent = "অনুগ্রহ করে প্রয়োজনীয় সব তথ্য পূরণ করুন।";
    msg.style.color = "#d92d3a";
    return;
  }

  const text =
`Assalamu Alaikum, আমি SSC 2027 Math & English Rescue Program-এ ভর্তি হতে চাই।

Student Name: ${student}
Guardian Name: ${guardian || "Not provided"}
WhatsApp Number: ${whatsapp}
Payment Method: ${method}
Payment Amount: ৳499
Payment Number: ${PAYMENT_NUMBER}
Transaction ID: ${trx}
Sender Number: ${sender}

অনুগ্রহ করে আমার payment verify করে WhatsApp group access দিন।`;

  msg.textContent = "WhatsApp খুলছে…";
  msg.style.color = "#08794e";

  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
