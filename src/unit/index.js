//邮箱验证
export function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// 手机号验证
export function isValidPhone(phone) {
    // 简单的手机号格式验证，假设为11位数字
    return /^\d{11}$/.test(phone);
}