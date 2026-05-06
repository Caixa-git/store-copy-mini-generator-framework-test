/* ===== State ===== */
const SAMPLE_PATH = 'data/sample_shops.json';
let sampleShops = [];
let lastResults = null;

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  loadSampleData();
  setupEventListeners();
});

/* ===== Data ===== */
async function loadSampleData() {
  try {
    const res = await fetch(SAMPLE_PATH);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    sampleShops = await res.json();
    renderSampleButtons();
  } catch (err) {
    console.warn('Sample data load:', err.message);
    document.getElementById('sampleSection').style.display = 'block';
    document.getElementById('sampleButtons').innerHTML = '<div class="empty-state">샘플 데이터를 불러오지 못했습니다. 직접 입력해 주세요.</div>';
  }
}

/* ===== Copy Generation ===== */
function generateCopies(shopName, category, location, strengths, targetCustomer, contactMethod) {
  const s = strengths.split(',').map(s => s.trim()).filter(Boolean);
  const s1 = s[0] || '좋은 서비스';
  const s2 = s[1] || '편안한 분위기';
  const s3 = s[2] || '합리적인 가격';

  const intros = [
    `${location}에서 ${s1}을(를) 제공하는 ${category}, ${shopName}입니다. ${s2}과(와) ${s3}(으)로 ${targetCustomer}을(를) 위한 최상의 경험을 선사합니다.`,
    `${location} ${category} ${shopName} — ${targetCustomer}을(를) 위한 ${s1}, ${s2}. 부담 없이 방문해 주세요.`,
    `✨ ${shopName} | ${location} ${category}\n${s1} · ${s2} · ${s3}\n${targetCustomer} 환영!`,
    `${location}에 위치한 ${shopName}입니다. ${s1}과(와) ${s2}을(를) 중심으로 ${targetCustomer}분들께 ${s3}을(를) 제공합니다.`,
    `“${targetCustomer}”라면 주목! ${location} ${category} ${shopName}에서 ${s1}, ${s2}, ${s3}을(를) 경험해 보세요.`
  ];

  const profiles = [
    `📍 ${location}\n🏠 ${shopName} (${category})\n✨ ${s1} · ${s2}\n💬 ${targetCustomer} 환영\n📩 ${contactMethod}`,
    `${shopName} — ${location} ${category}\n${s1} / ${s2}\n문의: ${contactMethod}`,
    `🏪 ${shopName}\n📌 ${location} · ${category}\n⭐ ${s1}\n📞 ${contactMethod}\n💝 ${targetCustomer}`
  ];

  const ctas = [
    `${contactMethod}(으)로 편하게 문의해 주세요. ${shopName}이(가) ${s1}(으)로 맞이하겠습니다.`,
    `문의는 ${contactMethod}에서 받고 있습니다. ${shopName}과(와) 함께 ${s2}을(를) 경험해 보세요.`,
    `💰 지금 ${shopName}의 ${contactMethod}을(를) 통해 예약하시면 더욱 편리하게 이용하실 수 있습니다.`
  ];

  const reviews = [
    `${shopName}을(를) 방문해 주셔서 감사합니다. ${s1}(으)로 다음에도 편안하게 관리받으실 수 있도록 준비하겠습니다.`,
    `소중한 후기 감사합니다. ${targetCustomer}분들께 항상 ${s2}을(를) 제공하도록 노력하겠습니다.`,
    `다음 방문 때도 좋은 서비스로 보답드리겠습니다. ${contactMethod}(으)로 연락 주시면 더 자세히 안내해 드릴게요.`
  ];

  return { intros, profiles, ctas, reviews };
}

/* ===== Render ===== */
function renderResults(results) {
  lastResults = results;
  const section = document.getElementById('resultsSection');
  const empty = document.getElementById('resultsEmpty');
  const content = document.getElementById('resultsContent');

  empty.style.display = 'none';
  content.style.display = 'block';
  section.style.display = 'block';

  renderCopyList('introList', results.intros);
  renderCopyList('profileList', results.profiles);
  renderCopyList('ctaList', results.ctas);
  renderCopyList('reviewList', results.reviews);

  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderCopyList(listId, items) {
  const ul = document.getElementById(listId);
  ul.innerHTML = items.map((text, i) => {
    const escaped = text.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    return `<li><span>${text.replace(/\n/g, '<br>')}</span><button class="copy-btn" data-text="${escaped}">복사</button></li>`;
  }).join('');
}

function renderSampleButtons() {
  const container = document.getElementById('sampleButtons');
  document.getElementById('sampleSection').style.display = 'block';
  container.innerHTML = sampleShops.map(shop =>
    `<button class="sample-btn" data-name="${shop.shop_name}">${shop.shop_name}<br><small>${shop.category}</small></button>`
  ).join('');
}

/* ===== Form ===== */
function getFormValues() {
  return {
    shopName: document.getElementById('shopName').value.trim(),
    category: document.getElementById('category').value.trim(),
    location: document.getElementById('location').value.trim(),
    strengths: document.getElementById('strengths').value.trim(),
    targetCustomer: document.getElementById('targetCustomer').value.trim(),
    contactMethod: document.getElementById('contactMethod').value.trim()
  };
}

function validateForm(vals) {
  const empty = Object.entries(vals).filter(([, v]) => !v).map(([k]) => k);
  if (empty.length > 0) {
    showToast('필수 입력값을 모두 채워 주세요.');
    return false;
  }
  return true;
}

function fillForm(shop) {
  document.getElementById('shopName').value = shop.shop_name;
  document.getElementById('category').value = shop.category;
  document.getElementById('location').value = shop.location;
  document.getElementById('strengths').value = shop.strengths.join(', ');
  document.getElementById('targetCustomer').value = shop.target_customer;
  document.getElementById('contactMethod').value = shop.contact_method;
}

function resetForm() {
  document.querySelectorAll('.form-group input').forEach(el => el.value = '');
  const section = document.getElementById('resultsSection');
  section.style.display = 'none';
  document.getElementById('resultsContent').style.display = 'none';
  document.getElementById('resultsEmpty').style.display = 'block';
  showToast('입력값이 초기화되었습니다.');
}

/* ===== Events ===== */
function setupEventListeners() {
  document.getElementById('generateBtn').addEventListener('click', handleGenerate);
  document.getElementById('resetBtn').addEventListener('click', resetForm);

  document.getElementById('sampleBtn').addEventListener('click', () => {
    document.getElementById('sampleSection').style.display = 'block';
    document.getElementById('sampleSection').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('sampleButtons').addEventListener('click', (e) => {
    const btn = e.target.closest('.sample-btn');
    if (!btn) return;
    const shop = sampleShops.find(s => s.shop_name === btn.dataset.name);
    if (shop) fillForm(shop);
    document.getElementById('sampleSection').style.display = 'none';
    showToast(`"${shop.shop_name}" 정보를 불러왔습니다.`);
  });

  document.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('.copy-btn');
    if (!copyBtn) return;
    const text = copyBtn.dataset.text;
    copyToClipboard(text, copyBtn);
  });
}

function handleGenerate() {
  const vals = getFormValues();
  if (!validateForm(vals)) return;
  const results = generateCopies(
    vals.shopName, vals.category, vals.location,
    vals.strengths, vals.targetCustomer, vals.contactMethod
  );
  renderResults(results);
  showToast('문구가 생성되었습니다.');
}

/* ===== Utils ===== */
function copyToClipboard(text, btnEl) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      btnEl.textContent = '✓';
      btnEl.classList.add('copied');
      setTimeout(() => { btnEl.textContent = '복사'; btnEl.classList.remove('copied'); }, 1500);
    }).catch(() => fallbackCopy(text, btnEl));
  } else {
    fallbackCopy(text, btnEl);
  }
}

function fallbackCopy(text, btnEl) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy');
    document.body.removeChild(ta);
    btnEl.textContent = '✓';
    btnEl.classList.add('copied');
    setTimeout(() => { btnEl.textContent = '복사'; btnEl.classList.remove('copied'); }, 1500);
  } catch {
    showToast('복사에 실패했습니다. 텍스트를 직접 선택해 주세요.');
  }
}

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div'); toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2000);
}
