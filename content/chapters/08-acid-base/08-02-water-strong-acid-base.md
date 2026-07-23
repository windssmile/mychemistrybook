---
title: "8.2 水的自偶电离与强酸强碱"
chapter: 8
unit: 8.2
status: draft-v0.1
estimated_study_time: "135–180分钟"
level: core
---

# 8.2 水的自偶电离与强酸强碱

## 本课要解决的问题

纯水为什么同时含有少量\(\ce{H3O+}\)和\(\ce{OH-}\)？pH为什么严格由活度而非裸
浓度定义？中性溶液为什么不在所有温度下都等于pH 7？强酸强碱的pH怎样从化学计量
得到？混合酸碱时为什么必须先做中和计量？为什么
\(10^{-8}\ \mathrm{mol\,L^{-1}}\)盐酸不能直接写成pH 8？

本课建立：

\[
\boxed{
\ce{2H2O(l)<=>H3O+(aq)+OH-(aq)}
}
\]

\[
\boxed{
K_\mathrm w=a_{\ce{H3O+}}a_{\ce{OH-}}
}
\]

\[
\boxed{
\mathrm{pH}=-\log_{10}a_{\ce{H+}}
}
\]

在25 °C稀溶液近似下：

\[
K_\mathrm w\approx
\frac{[\ce{H3O+}]}{c^\circ}
\frac{[\ce{OH-}]}{c^\circ}
\approx1.0\times10^{-14}
\]

---

## 学习目标

完成本课后，你应该能够：

1. 用Brønsted模型解释水的自偶质子转移；
2. 写出水自偶电离的严格平衡表达式；
3. 区分完整平衡常数与\(K_\mathrm w\)；
4. 用活度定义pH、pOH和\(\mathrm pK_\mathrm w\)；
5. 说明25 °C中性水为何近似pH 7；
6. 说明中性条件随温度改变；
7. 计算常规浓度的单质子强酸和强碱pH；
8. 按化学计量处理多羟基强碱；
9. 先做中和计量，再计算强酸强碱混合物pH；
10. 用电荷守恒与\(K_\mathrm w\)求极稀强酸或强碱；
11. 解释pH并非数学上只能落在0至14；
12. 识别高浓度溶液中活度和完全解离近似的局限；
13. 区分酸碱强弱、分析浓度、pH与危险性；
14. 对计算结果进行电荷、范围和单位检查。

---

## 学习本课之前

- [8.1](./08-01-models-structure-solvent.md)中的Brønsted酸碱、水的两性和拉平效应；
- [7.4](../07-kinetics-equilibrium/07-04-dynamic-equilibrium-activity-constant.md)中的
  活度与无量纲\(K\)；
- [7.6](../07-kinetics-equilibrium/07-06-equilibrium-composition-multiple.md)中的
  电荷守恒和组成求解；
- 物质的量、稀释、对数与一元二次方程。

### 3分钟诊断

1. 水能否同时作为Brønsted酸和碱？
2. 对数的自变量能否带\(\mathrm{mol\,L^{-1}}\)单位？
3. \(0.100\ \mathrm{mol\,L^{-1}}\ \ce{Ca(OH)2}\)若完全溶解，初步
   \([\ce{OH-}]\)是0.100还是0.200？
4. 酸碱混合后，能否直接把混合前的pH取平均？

<details markdown="1">
<summary>查看诊断答案</summary>

1. 能；一分子水可供质子，另一分子水可受质子；
2. 不能，严格对数对象必须无量纲；
3. \(0.200\ \mathrm{mol\,L^{-1}}\)，但还需确认溶解度与活度近似；
4. 不能；先做中和反应的物质的量计量，再由剩余强酸或强碱求pH。

</details>

---

## 1. 水的自偶质子转移

两个水分子之间可发生：

\[
\ce{H2O + H2O <=> H3O+ + OH-}
\]

其中：

- 提供质子的水是Brønsted酸，变为\(\ce{OH-}\)；
- 接受质子的水是Brønsted碱，变为\(\ce{H3O+}\)。

同一种分子之间发生的质子转移称为自偶质子转移或自质子解离
（autoprotolysis）。平衡高度偏向水，但离子浓度并非严格为零。

真实液态水中的过量质子和氢氧根会通过氢键网络快速重组；书写\(\ce{H3O+}\)和
\(\ce{OH-}\)是有用的化学计量表示，不表示它们始终是孤立静止的单体。

---

## 2. 从完整平衡常数到\(K_\mathrm w\)

完整活度表达式：

\[
K=
\frac{a_{\ce{H3O+}}a_{\ce{OH-}}}
{a_{\ce{H2O}}^2}
\]

水作为近似纯溶剂时：

\[
a_{\ce{H2O}}\approx1
\]

把近似恒定的水活度并入常数，定义：

\[
\boxed{
K_\mathrm w
=a_{\ce{H3O+}}a_{\ce{OH-}}
}
\]

在25 °C：

\[
\boxed{
K_\mathrm w\approx1.0\times10^{-14}
}
\]

这里的\(K_\mathrm w\)是无量纲活度乘积。

### 2.1 浓度近似

足够稀的水溶液中：

\[
a_i=\gamma_i\frac{c_i}{c^\circ}
\approx\frac{c_i}{c^\circ}
\]

所以：

\[
K_\mathrm w
\approx
\left(\frac{[\ce{H3O+}]}{c^\circ}\right)
\left(\frac{[\ce{OH-}]}{c^\circ}\right)
\]

基础计算常省略\(c^\circ=1\ \mathrm{mol\,L^{-1}}\)，写成数值关系：

\[
[\ce{H3O+}][\ce{OH-}]
\approx1.0\times10^{-14}
\]

此简式中浓度数值按\(\mathrm{mol\,L^{-1}}\)代入；不要由简写误认为严格
\(K_\mathrm w\)带单位。

---

## 3. pH严格由活度定义

IUPAC定义：

\[
\boxed{
\mathrm{pH}
=-\log_{10}a_{\ce{H+}}
}
\]

水溶液教材常用\(\ce{H3O+}\)表达水合质子，于是写：

\[
\mathrm{pH}
\approx-\log_{10}a_{\ce{H3O+}}
\]

在稀溶液、活度系数近似1时：

\[
\boxed{
\mathrm{pH}
\approx
-\log_{10}
\left(
\frac{[\ce{H3O+}]}{c^\circ}
\right)
}
\]

常见简写：

\[
\mathrm{pH}\approx-\log_{10}[\ce{H3O+}]
\]

隐含\([\ce{H3O+}]\)用\(\mathrm{mol\,L^{-1}}\)数值并除以标准浓度。

### 3.1 pH是对数标度

pH相差1，氢离子活度相差10倍；相差2则相差100倍。pH不是酸浓度的线性刻度。

### 3.2 pH测量的边界

单离子活度不能脱离约定独立测量。实际pH通过经标准缓冲液校准的电化学测量实现，包含
操作定义和测量不确定度。基础计算给出模型pH，不等同于任何复杂样品的无误差仪器读数。

---

## 4. pOH与\(\mathrm pK_\mathrm w\)

定义：

\[
\mathrm{pOH}
=-\log_{10}a_{\ce{OH-}}
\]

\[
\mathrm pK_\mathrm w
=-\log_{10}K_\mathrm w
\]

对：

\[
K_\mathrm w=a_{\ce{H3O+}}a_{\ce{OH-}}
\]

取负常用对数：

\[
\boxed{
\mathrm{pH}+\mathrm{pOH}
=\mathrm pK_\mathrm w
}
\]

25 °C时：

\[
\mathrm pK_\mathrm w\approx14.00
\]

所以在该温度和模型下：

\[
\boxed{
\mathrm{pH}+\mathrm{pOH}\approx14.00
}
\]

“pH+pOH=14”带温度条件，不是所有温度的永恒恒等式。

---

## 5. 中性是什么意思

酸碱中性定义为：

\[
\boxed{
a_{\ce{H3O+}}=a_{\ce{OH-}}
}
\]

结合\(K_\mathrm w\)：

\[
a_{\ce{H3O+}}
=a_{\ce{OH-}}
=\sqrt{K_\mathrm w}
\]

因此中性pH：

\[
\boxed{
\mathrm{pH}_\mathrm{neutral}
=\frac12\mathrm pK_\mathrm w
}
\]

25 °C时：

\[
\mathrm{pH}_\mathrm{neutral}\approx7.00
\]

### 5.1 中性不总是pH 7

\(K_\mathrm w\)随温度变化，所以中性pH也随温度变化。若某温度的中性pH小于7，该
中性水并不因此“呈酸性”；判断酸性或碱性应比较：

\[
a_{\ce{H3O+}}
\quad\text{与}\quad
a_{\ce{OH-}}
\]

而不是机械比较pH与7。

---

## 6. 常规强酸

强酸在给定水溶液和浓度范围内，质子转移高度有利。对单质子强酸\(\ce{HA}\)：

\[
\ce{HA + H2O -> H3O+ + A-}
\]

若分析浓度为\(C_\mathrm a\)，且：

- 解离近似完全；
- 酸贡献远大于水自偶电离；
- 活度系数近似1；

则：

\[
[\ce{H3O+}]\approx C_\mathrm a
\]

\[
\boxed{
\mathrm{pH}
\approx-\log_{10}(C_\mathrm a/c^\circ)
}
\]

### 示例1：0.0100 M HCl

\[
[\ce{H3O+}]\approx0.0100\ \mathrm{mol\,L^{-1}}
\]

\[
\boxed{
\mathrm{pH}=2.000
}
\]

由：

\[
[\ce{OH-}]
\approx\frac{10^{-14}}{10^{-2}}
=10^{-12}\ \mathrm{mol\,L^{-1}}
\]

水贡献可忽略。

---

## 7. 常规强碱

对完全溶解的一元强碱\(\ce{MOH}\)：

\[
\ce{MOH -> M+ + OH-}
\]

\[
[\ce{OH-}]\approx C_\mathrm b
\]

\[
\mathrm{pOH}
\approx-\log_{10}(C_\mathrm b/c^\circ)
\]

25 °C：

\[
\boxed{
\mathrm{pH}\approx14.00-\mathrm{pOH}
}
\]

### 示例2：0.00250 M NaOH

\[
\mathrm{pOH}
=-\log_{10}(0.00250)
=2.602
\]

\[
\boxed{
\mathrm{pH}=11.398
}
\]

---

## 8. 多个\(\ce{OH-}\)的计量

若强碱完全溶解且每式量释放\(\nu_{\ce{OH-}}\)个氢氧根：

\[
[\ce{OH-}]
\approx\nu_{\ce{OH-}}C_\mathrm b
\]

例如：

\[
\ce{Ba(OH)2 -> Ba^2+ + 2OH-}
\]

\[
[\ce{OH-}]\approx2C_{\ce{Ba(OH)2}}
\]

但必须区分：

- 每摩尔已溶解物质产生多少\(\ce{OH-}\)；
- 固体实际能溶解多少。

“含两个OH”不能绕过溶解度限制。难溶氢氧化物的平衡留到第9章。

### 即时检查1

\(5.00\times10^{-3}\ \mathrm{mol\,L^{-1}}\ \ce{Ba(OH)2}\)完全溶解，
25 °C时求pH。

<details markdown="1">
<summary>答案</summary>

\[
[\ce{OH-}]
=2(5.00\times10^{-3})
=1.00\times10^{-2}
\]

\[
\mathrm{pOH}=2.000
\]

\[
\boxed{\mathrm{pH}=12.000}
\]

</details>

---

## 9. 多质子酸不能只看化学式乘倍数

\(\ce{H2SO4}\)第一步质子转移在常见稀水溶液中很强：

\[
\ce{H2SO4 + H2O -> H3O+ + HSO4-}
\]

第二步：

\[
\ce{HSO4- + H2O <=> H3O+ + SO4^2-}
\]

不是在所有浓度下都可视为100%完成。因此一般不能无条件写：

\[
[\ce{H3O+}]=2C_{\ce{H2SO4}}
\]

多质子酸的逐级平衡将在8.4处理。这里的原则是：

> “强酸”要对应具体质子转移步骤，不等于分子中每个可电离氢都完全释放。

---

## 10. 强酸强碱混合：先计量，后平衡

核心净离子反应：

\[
\ce{H3O+ + OH- -> 2H2O}
\]

步骤：

1. 将各溶液浓度换成\(\ce{H3O+}\)和\(\ce{OH-}\)物质的量；
2. 按1:1反应确定限量者；
3. 求过量离子的剩余物质的量；
4. 除以混合后总体积；
5. 求pH或pOH；
6. 若剩余量极小，再考虑水自偶电离。

不能把混合前pH直接平均，因为pH是对数，且酸碱发生化学反应。

### 示例3

混合：

\[
50.0\ \mathrm{mL}\ 0.100\ \mathrm M\ \ce{HCl}
\]

与：

\[
30.0\ \mathrm{mL}\ 0.150\ \mathrm M\ \ce{NaOH}
\]

酸：

\[
n(\ce{H3O+})
=(0.0500)(0.100)
=5.00\times10^{-3}\ \mathrm{mol}
\]

碱：

\[
n(\ce{OH-})
=(0.0300)(0.150)
=4.50\times10^{-3}\ \mathrm{mol}
\]

剩余：

\[
n(\ce{H3O+})
=5.00\times10^{-4}\ \mathrm{mol}
\]

总体积近似：

\[
V=0.0800\ \mathrm L
\]

\[
[\ce{H3O+}]
=\frac{5.00\times10^{-4}}{0.0800}
=6.25\times10^{-3}\ \mathrm M
\]

\[
\boxed{
\mathrm{pH}=2.204
}
\]

---

## 11. 恰好化学计量相等

若强酸与强碱的酸碱当量恰好相等，在理想稀溶液且旁观离子不水解的模型中，剩余溶液
由水自偶电离控制：

\[
\mathrm{pH}\approx\frac12\mathrm pK_\mathrm w
\]

25 °C时近似pH 7。

但“当量点pH 7”只适用于强酸—强碱、适当稀溶液和25 °C近似。弱酸、弱碱盐会发生
水解，其他温度的中性pH也不一定为7。

---

## 12. 极稀强酸：必须把水算进去

设完全解离的单质子强酸分析浓度为\(C_\mathrm a\)，其阴离子浓度：

\[
[\ce{A-}]=C_\mathrm a
\]

忽略活度系数时，电荷守恒：

\[
[\ce{H3O+}]
=C_\mathrm a+[\ce{OH-}]
\]

令：

\[
h=[\ce{H3O+}]
\]

由：

\[
[\ce{OH-}]=\frac{K_\mathrm w^c}{h}
\]

这里\(K_\mathrm w^c\)表示采用浓度数值近似的
\((10^{-7})^2\)。代入：

\[
h=C_\mathrm a+\frac{K_\mathrm w^c}{h}
\]

\[
h^2-C_\mathrm ah-K_\mathrm w^c=0
\]

物理解：

\[
\boxed{
h=
\frac{
C_\mathrm a+\sqrt{C_\mathrm a^2+4K_\mathrm w^c}
}{2}
}
\]

### 示例4：\(10^{-8}\) M HCl

\[
C_\mathrm a=1.00\times10^{-8}\ \mathrm M
\]

\[
h=
\frac{
1.00\times10^{-8}
+
\sqrt{(1.00\times10^{-8})^2+4.00\times10^{-14}}
}{2}
\]

\[
h=1.05\times10^{-7}\ \mathrm M
\]

\[
\boxed{
\mathrm{pH}\approx6.98
}
\]

直接写pH 8不仅忽略水，还荒谬地把加酸后的溶液算得比中性水更碱。

---

## 13. 极稀强碱

设一元强碱提供的分析\(\ce{OH-}\)浓度为\(C_\mathrm b\)。令：

\[
o=[\ce{OH-}]
\]

电荷守恒给出：

\[
o=C_\mathrm b+[\ce{H3O+}]
\]

\[
[\ce{H3O+}]=\frac{K_\mathrm w^c}{o}
\]

所以：

\[
\boxed{
o=
\frac{
C_\mathrm b+\sqrt{C_\mathrm b^2+4K_\mathrm w^c}
}{2}
}
\]

再由\(h=K_\mathrm w^c/o\)或
\(\mathrm{pH}=\mathrm pK_\mathrm w-\mathrm{pOH}\)求pH。

酸、碱极稀公式的对称性来自水自偶电离和电荷守恒。

---

## 14. 何时可忽略水的贡献

对强酸，若：

\[
C_\mathrm a\gg\sqrt{K_\mathrm w^c}
\]

则：

\[
h\approx C_\mathrm a
\]

25 °C时\(\sqrt{K_\mathrm w^c}\approx10^{-7}\ \mathrm M\)。若强酸浓度至少比它大
几十至上百倍，水贡献通常很小；具体是否可忽略取决于所需精度。

不能把“\(10^{-6}\ \mathrm M\)以上都绝对安全”当成定律。应使用精确式估计误差。

### 即时检查2

25 °C时，\(1.00\times10^{-6}\ \mathrm M\) HCl的精确浓度近似
\([\ce{H3O+}]\)是多少？

<details markdown="1">
<summary>答案</summary>

\[
h=
\frac{
1.00\times10^{-6}
+
\sqrt{1.00\times10^{-12}+4.00\times10^{-14}}
}{2}
\]

\[
h\approx1.01\times10^{-6}\ \mathrm M
\]

\[
\mathrm{pH}\approx5.996
\]

直接用\(10^{-6}\)得到6.000，误差很小但并非严格为零。

</details>

---

## 15. 高浓度与pH范围

常说pH范围0至14，实际只是25 °C附近稀水溶液的常见范围。

### 15.1 pH可以小于0或大于14

若氢离子活度大于1：

\[
\mathrm{pH}<0
\]

若氢氧根活度很大，也可能有：

\[
\mathrm{pH}>14
\]

### 15.2 不能用高浓度裸浓度直接断言

在浓酸、浓碱中：

- 活度系数显著偏离1；
- 水活度不再近似1；
- 酸碱未必按稀溶液模型完全解离；
- 体积非加和；
- 玻璃电极存在酸误差或碱误差等测量问题。

因此“1.0 M强酸pH精确等于0.000”只是一种理想浓度近似，不是严格实验事实。

---

## 16. 强弱、浓度、pH与危险性

| 概念 | 主要含义 |
|---|---|
| 酸碱强弱 | 给定溶剂中质子转移平衡倾向 |
| 分析浓度 | 配制或加入的酸碱总量/体积 |
| pH | 氢离子活度的对数标度 |
| 危险性 | 浓度、剂量、腐蚀、氧化性、毒性和反应性等综合结果 |

稀强酸的pH可能高于浓弱酸；弱酸也可在高浓度下强烈腐蚀或具有其他危险。不能用
“强酸/弱酸”单一标签替代安全判断。

---

## 17. 一套可靠的强酸强碱流程

1. 判断酸碱是否在给定介质和浓度范围内可作完全解离近似；
2. 写出每摩尔溶质提供的\(\ce{H3O+}\)或\(\ce{OH-}\)计量；
3. 若混合，先算物质的量并中和；
4. 用混合后总体积求过量离子浓度；
5. 检查该浓度是否远大于\(\sqrt{K_\mathrm w^c}\)；
6. 常规稀溶液用浓度近似求pH/pOH；
7. 极稀时联立电荷守恒与\(K_\mathrm w\)；
8. 高浓度时报告活度与完全解离局限；
9. 检查pH方向、电荷守恒和有效数字；
10. 写明温度，尤其使用\(\mathrm pK_\mathrm w=14.00\)时。

---

## 18. 常见误区

### 误区1：纯水中没有离子

水发生少量自偶质子转移，平衡时存在\(\ce{H3O+}\)和\(\ce{OH-}\)。

### 误区2：pH严格等于负对数浓度

pH严格按氢离子活度定义；浓度式是稀溶液近似。

### 误区3：中性永远是pH 7

中性要求氢离子与氢氧根活度相等；中性pH为
\(\mathrm pK_\mathrm w/2\)，随温度变。

### 误区4：pH只能在0至14

这是常见稀水溶液范围，不是数学或热力学硬边界。

### 误区5：多质子强酸浓度直接乘氢数

每一步质子转移强弱不同，需逐步检查。

### 误区6：混合酸碱的pH取平均

必须先按物质的量中和。

### 误区7：极稀强酸仍有\([\ce{H3O+}]=C_\mathrm a\)

当\(C_\mathrm a\)接近\(10^{-7}\ \mathrm M\)时，水贡献不可忽略。

---

## 19. 分层练习

### 基础层

1. 写出水自偶质子转移及\(K_\mathrm w\)表达式。
2. 定义pH、pOH和\(\mathrm pK_\mathrm w\)。
3. 25 °C时，中性水的氢离子活度和pH分别约为多少？
4. 为什么“中性=pH 7”必须写温度条件？

### 应用层

5. 求25 °C、\(3.00\times10^{-3}\ \mathrm M\) HCl的理想近似pH。
6. 求25 °C、\(4.00\times10^{-4}\ \mathrm M\) NaOH的理想近似pH。
7. \(2.00\times10^{-3}\ \mathrm M\ \ce{Ba(OH)2}\)完全溶解，求理想近似pH。
8. 混合25.0 mL 0.200 M HCl与35.0 mL 0.100 M NaOH，求pH。

### 综合层

9. 用精确浓度近似式求25 °C、\(1.00\times10^{-8}\ \mathrm M\) HCl的pH。
10. 某学生称“60 °C纯水pH不是7，所以不是中性”。指出错误。
11. 为什么不能仅由化学式\(\ce{H2SO4}\)断言
    \([\ce{H3O+}]=2C_{\ce{H2SO4}}\)？
12. 列出浓强酸中\(\mathrm{pH}=-\log C\)可能失效的至少三项原因。

---

## 20. 完整答案

### 练习1

<details markdown="1">
<summary>完整答案</summary>

\[
\ce{2H2O(l)<=>H3O+(aq)+OH-(aq)}
\]

\[
K_\mathrm w
=a_{\ce{H3O+}}a_{\ce{OH-}}
\]

</details>

### 练习2

<details markdown="1">
<summary>完整答案</summary>

\[
\mathrm{pH}=-\log_{10}a_{\ce{H+}}
\]

\[
\mathrm{pOH}=-\log_{10}a_{\ce{OH-}}
\]

\[
\mathrm pK_\mathrm w=-\log_{10}K_\mathrm w
\]

</details>

### 练习3

<details markdown="1">
<summary>完整答案</summary>

\[
a_{\ce{H3O+}}
=\sqrt{K_\mathrm w}
\approx1.0\times10^{-7}
\]

\[
\mathrm{pH}\approx7.00
\]

</details>

### 练习4

<details markdown="1">
<summary>完整答案</summary>

\(K_\mathrm w\)随温度改变，中性pH为
\(\mathrm pK_\mathrm w/2\)。只有25 °C附近
\(\mathrm pK_\mathrm w\approx14.00\)，中性pH才近似7。

</details>

### 练习5

<details markdown="1">
<summary>完整答案</summary>

\[
\mathrm{pH}
=-\log_{10}(3.00\times10^{-3})
=2.523
\]

</details>

### 练习6

<details markdown="1">
<summary>完整答案</summary>

\[
\mathrm{pOH}
=-\log_{10}(4.00\times10^{-4})
=3.398
\]

\[
\mathrm{pH}=14.000-3.398=10.602
\]

</details>

### 练习7

<details markdown="1">
<summary>完整答案</summary>

\[
[\ce{OH-}]
=2(2.00\times10^{-3})
=4.00\times10^{-3}
\]

\[
\mathrm{pOH}=2.398
\]

\[
\mathrm{pH}=11.602
\]

</details>

### 练习8

<details markdown="1">
<summary>完整答案</summary>

\[
n(\ce{H3O+})
=(0.0250)(0.200)
=5.00\times10^{-3}\ \mathrm{mol}
\]

\[
n(\ce{OH-})
=(0.0350)(0.100)
=3.50\times10^{-3}\ \mathrm{mol}
\]

酸剩余：

\[
1.50\times10^{-3}\ \mathrm{mol}
\]

总体积：

\[
0.0600\ \mathrm L
\]

\[
[\ce{H3O+}]=0.0250\ \mathrm M
\]

\[
\boxed{\mathrm{pH}=1.602}
\]

</details>

### 练习9

<details markdown="1">
<summary>完整答案</summary>

\[
h=
\frac{
10^{-8}+\sqrt{10^{-16}+4.00\times10^{-14}}
}{2}
=1.05\times10^{-7}\ \mathrm M
\]

\[
\boxed{\mathrm{pH}\approx6.98}
\]

</details>

### 练习10

<details markdown="1">
<summary>完整答案</summary>

中性定义为\(a_{\ce{H3O+}}=a_{\ce{OH-}}\)，不是pH固定为7。60 °C的
\(K_\mathrm w\)与25 °C不同，所以中性pH也不同；只要两种离子活度相等，仍是中性。

</details>

### 练习11

<details markdown="1">
<summary>完整答案</summary>

\(\ce{H2SO4}\)第一步质子转移很强，第二步\(\ce{HSO4-}\)解离是独立平衡，程度
依赖浓度、温度和介质。分子含两个氢不等于两步均100%完成。

</details>

### 练习12

<details markdown="1">
<summary>完整答案</summary>

例如：

1. 活度系数显著偏离1；
2. 水活度不再近似1；
3. 完全解离近似可能失效；
4. 体积与浓度关系非理想；
5. 电极测量存在酸误差、液接电势等局限。

</details>

---

## 21. 本课小结

1. 水通过两个相同分子间的质子转移生成少量\(\ce{H3O+}\)和\(\ce{OH-}\)。
2. 水作为近似纯溶剂时，\(K_\mathrm w=a_{\ce{H3O+}}a_{\ce{OH-}}\)。
3. 25 °C时\(K_\mathrm w\approx1.0\times10^{-14}\)。
4. pH严格定义为氢离子活度的负常用对数。
5. \(\mathrm{pH}+\mathrm{pOH}=\mathrm pK_\mathrm w\)。
6. 中性要求氢离子和氢氧根活度相等，中性pH为
   \(\mathrm pK_\mathrm w/2\)。
7. 中性pH随温度变化，不永远等于7。
8. 常规稀单质子强酸可近似\([\ce{H3O+}]=C_\mathrm a\)。
9. 强碱计算先按化学计量求每摩尔溶质提供的\(\ce{OH-}\)。
10. 强酸强碱混合必须先做中和物质的量计量，再求过量离子浓度。
11. 多质子酸不能按分子中氢数无条件倍乘。
12. 极稀强酸强碱必须联立水自偶电离和电荷守恒。
13. pH不被数学上限制在0至14。
14. 高浓度体系必须考虑活度、水活度、解离和测量边界。

---

## 22. 下一课

强酸强碱可在适当范围内先做完全反应计量。下一课取消这个近似：

> 弱酸弱碱的\(K_a,K_b\)怎样决定组成？怎样用ICE表、电荷守恒和物料守恒求pH？
> “小\(x\)”近似何时可靠，为什么稀释会提高百分电离却降低
> \([\ce{H3O+}]\)？

---

## 23. 术语与资料来源

本页自偶质子转移、\(K_\mathrm w\)和pH定义依据IUPAC资料核对，访问日期为2026-07-24：

- [IUPAC Gold Book：autoprotolysis](https://goldbook.iupac.org/terms/view/A00531)
- [IUPAC Gold Book：autoprotolysis constant](https://goldbook.iupac.org/terms/view/A00532)
- [IUPAC Gold Book：pH](https://goldbook.iupac.org/terms/view/P04524)
- [IUPAC Recommendations 2002：pH定义、标准与测量](https://publications.iupac.org/pac/2002/pdf/7411x2169.pdf)

进一步参考：

- Roger G. Bates, *Determination of pH: Theory and Practice*.
- Peter Atkins, Julio de Paula, *Physical Chemistry*, proton transfer and
  activities.
