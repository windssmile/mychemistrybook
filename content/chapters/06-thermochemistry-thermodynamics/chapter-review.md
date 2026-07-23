---
title: "第6章复习：从能量账本到变化方向"
chapter: 6
status: cross-reviewed
estimated_study_time: "180–240分钟"
level: core
---

# 第6章复习：从能量账本到变化方向

## 章末任务

本章不是把\(\Delta U,\Delta H,\Delta S,\Delta G\)四个符号排成一张背诵表，而是
建立一套有顺序的判断：

```text
先划定系统与初终态
→ 再声明热、功和反应方向
→ 用第一定律守恒能量
→ 选择适合实验约束的状态函数
→ 用Hess定律组合路径
→ 用第二定律或Gibbs能判断方向
→ 检查温度、组成、相态和耦合
→ 最后才写结论及适用边界
```

章末复习要求你对每个公式都能回答四件事：

1. 量的定义是什么；
2. 正负号采用什么约定；
3. 公式在什么条件下成立；
4. 计算结果能回答什么，不能回答什么。

---

## 1. 全章知识地图

```text
热力学系统
├─ 系统 / 环境 / 边界
├─ 开放 / 封闭 / 孤立
├─ 状态函数：U、H、S、G
└─ 过程量：q、w

第一定律
├─ ΔU=q+w
├─ pV功：w=-∫p_ext dV
├─ 定容且仅pV功：q_V=ΔU
└─ 恒压且仅pV功：q_p=ΔH

热化学
├─ H=U+pV
├─ ΔH=ΔU+Δn_gRT（理想气体反应）
├─ 热容与量热
├─ Hess定律
├─ 标准生成焓
└─ Born–Haber循环

第二定律
├─ S=k_B ln W
├─ ΔS_univ≥0
├─ ΔS=∫δq_rev/T
├─ 加热、相变、膨胀与混合
└─ 第三定律与标准摩尔熵

恒温恒压方向
├─ G=H-TS
├─ ΔG=ΔH-TΔS
├─ ΔG<0：正向有利
├─ ΔG=0：平衡
└─ ΔG>0：反向有利

温度与边界
├─ T*=ΔH/ΔS（常量近似）
├─ dΔH/dT=ΔC_p
├─ dΔS/dT=ΔC_p/T
├─ 耦合：ΔG_total=ΣΔG_i
└─ 方向 ≠ 速率 ≠ 完全反应
```

---

## 2. 四类量不能混用

| 量 | 类型 | 主要含义 | 常用单位 |
|---|---|---|---|
| \(U\) | 状态函数、广度量 | 系统内能 | J |
| \(H=U+pV\) | 状态函数、广度量 | 适合处理许多恒压过程 | J |
| \(S\) | 状态函数、广度量 | 能量与粒子分配的热力学量 | J K\(^{-1}\) |
| \(G=H-TS\) | 状态函数、广度量 | 恒温恒压约束下的方向势 | J |
| \(q\) | 过程量 | 温差导致的能量传递 | J |
| \(w\) | 过程量 | 除热以外的能量传递 | J |
| \(T\) | 状态变量、强度量 | 热力学温度 | K |
| \(p\) | 状态变量、强度量 | 压力 | Pa、bar |

因此：

- 系统不“含有热”，系统具有内能；
- \(\Delta U\)只由初终态决定，\(q,w\)随路径改变；
- 焓不是“储存的热量”；
- 熵不是简单的“混乱度评分”；
- Gibbs能不是系统全部能量，也不是反应速度。

---

## 3. 正负号总表

本书采用IUPAC常用约定：

\[
\boxed{\Delta U=q+w}
\]

- 系统吸热：\(q>0\)；
- 系统放热：\(q<0\)；
- 环境对系统做功：\(w>0\)；
- 系统对环境做功：\(w<0\)。

仅考虑压力—体积功：

\[
w=-\int p_\mathrm{ext}\,\mathrm dV
\]

故膨胀\(\Delta V>0\)时\(w<0\)，压缩时\(w>0\)。

反应热力学量还必须绑定所写反应方向：

- 反应式反向，\(\Delta_\mathrm rX\)变号；
- 反应式乘\(n\)，\(\Delta_\mathrm rX\)也乘\(n\)；
- 多步反应相加，状态函数变化相加。

---

## 4. 条件比公式更重要

| 关系 | 适用条件或说明 |
|---|---|
| \(\Delta U=q+w\) | 能量守恒；必须先定系统和符号 |
| \(w=-p_\mathrm{ext}\Delta V\) | 恒外压、仅计算\(pV\)功 |
| \(q_V=\Delta U\) | 定容且无其他功 |
| \(q_p=\Delta H\) | 恒压、仅\(pV\)功且组成变化按所定义过程处理 |
| \(\Delta H=\Delta U+\Delta n_gRT\) | 同温度下理想气体反应，凝聚相\(pV\)项忽略 |
| \(q=C\Delta T\) | 热容在温区内可视为常数 |
| \(\Delta S=q_\mathrm{rev}/T\) | 等温可逆路径 |
| \(\Delta S=C\ln(T_2/T_1)\) | 热容近似恒定的可逆加热/冷却路径 |
| \(\Delta G=\Delta H-T\Delta S\) | 初终态同温或恒温 |
| \(\Delta G=-T\Delta S_\mathrm{univ}\) | 恒温恒压、环境作热库等基础条件 |
| \(T_*=\Delta H/\Delta S\) | \(\Delta H,\Delta S\)在温区内近似恒定 |

“记住公式却漏掉条件”是本章最危险的错误类型。

---

## 5. 第一律与量热的统一流程

### 5.1 先选边界

咖啡杯量热中，常把反应体系、溶液和量热器分开记账：

\[
q_\mathrm{rxn}
+q_\mathrm{solution}
+q_\mathrm{cal}=0
\]

\[
q_\mathrm{solution}=mc\Delta T
\]

\[
q_\mathrm{cal}=C_\mathrm{cal}\Delta T
\]

若温度升高，溶液和量热器吸热为正，反应放热为负。

### 5.2 量热弹

刚性量热弹近似定容：

\[
q_V=\Delta U
\]

若题目要求反应焓，理想气体近似下再用：

\[
\Delta H=\Delta U+\Delta n_gRT
\]

### 综合例1：由量热弹数据求反应焓

某反应在298.15 K的刚性量热弹中按所写反应释放
\(1250\ \mathrm{kJ}\)，且\(\Delta n_g=-1\)。

\[
\Delta U=q_V=-1250\ \mathrm{kJ\,mol^{-1}}
\]

\[
\Delta H
=-1250+(-1)(8.314\times10^{-3})(298.15)
\]

\[
\boxed{\Delta H\approx-1252.5\ \mathrm{kJ\,mol^{-1}}}
\]

这里\(\Delta n_g\)只统计气态物质的化学计量变化。

---

## 6. Hess定律、生成量与循环

焓是状态函数，所以：

\[
\Delta H_\mathrm{direct}
=
\sum_i\Delta H_i
\]

标准反应焓：

\[
\boxed{
\Delta_\mathrm rH^\circ
=
\sum_\mathrm{products}\nu\Delta_\mathrm fH^\circ
-
\sum_\mathrm{reactants}\nu\Delta_\mathrm fH^\circ
}
\]

同样的“产物减反应物”结构适用于标准反应熵和标准反应Gibbs能：

\[
\Delta_\mathrm rS^\circ
=
\sum_\mathrm{products}\nu S^\circ
-
\sum_\mathrm{reactants}\nu S^\circ
\]

\[
\Delta_\mathrm rG^\circ
=
\sum_\mathrm{products}\nu\Delta_\mathrm fG^\circ
-
\sum_\mathrm{reactants}\nu\Delta_\mathrm fG^\circ
\]

### 6.1 两个“零点”不要混淆

- 元素参考态的\(\Delta_\mathrm fH^\circ=0\)和
  \(\Delta_\mathrm fG^\circ=0\)是生成量的参考约定；
- 完美晶体在0 K的熵为零是第三定律基线；
- 元素参考态在298.15 K的标准摩尔熵通常不为零。

### 6.2 Born–Haber循环检查

对离子晶体，依次审计：

1. 元素标准态是否原子化；
2. 金属所需各级电离是否齐全；
3. 非金属原子化计量是否正确；
4. 电子亲和步骤采用“能量变化”还是“释放能量”符号；
5. 晶格量定义为形成还是解离；
6. 中间物种、电子和电荷是否全部消去。

循环给出的是热化学状态函数账本，不证明真实晶体按这些孤立步骤形成。

---

## 7. 从宇宙熵到Gibbs判据

第二定律：

\[
\Delta S_\mathrm{univ}
=
\Delta S_\mathrm{sys}
+
\Delta S_\mathrm{surr}
\ge0
\]

在恒温恒压基础条件下：

\[
\Delta S_\mathrm{surr}
=-\frac{\Delta H_\mathrm{sys}}{T}
\]

于是：

\[
\Delta G_\mathrm{sys}
=-T\Delta S_\mathrm{univ}
\]

因此：

| \(\Delta G\) | 所写正向的含义 |
|---:|---|
| \(<0\) | 热力学有利 |
| \(=0\) | 对该变化达到平衡 |
| \(>0\) | 反向热力学有利 |

### 7.1 体系熵降低不违反第二定律

结晶、凝固和部分缔合反应可有\(\Delta S_\mathrm{sys}<0\)。只要放热等因素使：

\[
\Delta S_\mathrm{surr}>
|\Delta S_\mathrm{sys}|
\]

仍有\(\Delta S_\mathrm{univ}>0\)。

### 7.2 \(\Delta G^\circ\)不等于任意组成的\(\Delta G\)

标准反应Gibbs能描述规定标准态之间的变化。实际混合物中，组成改变会改变反应方向。
完整关系：

\[
\Delta_\mathrm rG
=
\Delta_\mathrm rG^\circ+RT\ln Q
\]

已在[7.5](../07-kinetics-equilibrium/07-05-reaction-quotient-gibbs-shift.md)与平衡常数
一起展开。本章首先要求牢记：

> 标准态结论不能无条件替代实际组成结论。

---

## 8. 温度、相变与耦合

### 8.1 四种焓—熵组合

| \(\Delta H\) | \(\Delta S\) | 常量近似下 |
|---|---|---|
| \(-\) | \(+\) | 各温度有利 |
| \(+\) | \(-\) | 各温度不利 |
| \(-\) | \(-\) | 低温较有利 |
| \(+\) | \(+\) | 高温较有利 |

同号时可估算：

\[
T_*=\frac{\Delta H}{\Delta S}
\]

但大温区应考虑：

\[
\frac{\mathrm d\Delta H}{\mathrm dT}=\Delta C_p
\qquad
\frac{\mathrm d\Delta S}{\mathrm dT}=\frac{\Delta C_p}{T}
\]

跨越相变必须分段并加入相变量。

### 8.2 耦合

\[
\Delta G_\mathrm{total}
=
\sum_i n_i\Delta G_i
\]

只有总值为负且过程之间存在真实物质或能量连接，整体过程才既有热力学账本支持，又有
物理耦合路径。

外界输入电功、光能或机械功也能驱动体系的\(\Delta G>0\)过程；判断第二定律时必须
扩大边界，把能量源纳入。

---

## 9. 五组必须区分的说法

### 9.1 放热与自发

放热只说明\(\Delta H<0\)。自发方向由\(\Delta S_\mathrm{univ}\)或在适当条件下由
\(\Delta G\)判断。

### 9.2 自发与快速

\(\Delta G<0\)不包含活化能、机理或时间尺度。速率问题属于动力学。

### 9.3 自发与完全

反应进行会改变组成和实际\(\Delta_\mathrm rG\)，体系趋向
\(\Delta_\mathrm rG=0\)的平衡，而不是必然耗尽反应物。

### 9.4 热力学稳定与动力学持久

亚稳态不是全局最低Gibbs能态，却可因高势垒而长期存在。

### 9.5 催化与热力学驱动

催化剂降低正逆反应的动力学势垒，不改变反应初终态的
\(\Delta H,\Delta S,\Delta G\)，也不改变相同约束下的平衡组成。

---

## 10. 综合计算的统一模板

### 第一步：写清反应和状态

配平方程式，标物态，说明温度、压力和标准态。

### 第二步：确定所求量

区分\(\Delta U,\Delta H,\Delta S,\Delta G\)，不要把量热数据未经条件检查直接命名。

### 第三步：选择路径

- 量热：能量守恒；
- 间接反应焓：Hess定律或生成焓；
- 方向：宇宙熵或Gibbs能；
- 温度变化：热容积分；
- 耦合：配平并相加完整过程。

### 第四步：统一单位和符号

尤其检查：

\[
\mathrm{J}\leftrightarrow\mathrm{kJ},
\qquad
^\circ\mathrm C\text{温差}\leftrightarrow\mathrm K\text{温差},
\qquad
T\text{必须用K}
\]

### 第五步：数量级与边界审查

- 数值是否随反应式倍乘；
- 符号是否符合吸放热和膨胀压缩方向；
- 结果是否接近0；
- 是否把标准态、理想性或恒热容近似外推过远；
- 结论是否越过“方向”去声称“速度”或“产率”。

---

## 11. 综合示例

### 示例1：焓—熵竞争

对：

\[
\ce{2SO2(g)+O2(g)->2SO3(g)}
\]

假设：

\[
\Delta_\mathrm rH^\circ=-197.8\ \mathrm{kJ\,mol^{-1}}
\]

\[
\Delta_\mathrm rS^\circ=-187.9\ \mathrm{J\,mol^{-1}\,K^{-1}}
\]

298.15 K时：

\[
\Delta_\mathrm rG^\circ
=-197.8-298.15(-0.1879)
\approx-141.8\ \mathrm{kJ\,mol^{-1}}
\]

常量近似下：

\[
T_*
=\frac{-197.8}{-0.1879}
\approx1053\ \mathrm K
\]

该反应为负焓、负熵：低温在热力学上更有利。但低温可能使反应变慢，这正说明平衡
趋势与动力学速率必须分开。

### 示例2：一个完整的量热结论

将\(50.0\ \mathrm{mL}\)酸溶液和\(50.0\ \mathrm{mL}\)碱溶液混合，近似总质量
\(100.0\ \mathrm g\)，比热容
\(4.184\ \mathrm{J\,g^{-1}\,K^{-1}}\)，量热器常数
\(25.0\ \mathrm{J\,K^{-1}}\)，温升\(6.00\ \mathrm K\)。

\[
q_\mathrm{surr}
=\left[(100.0)(4.184)+25.0\right]\times6.00
=2.66\ \mathrm{kJ}
\]

\[
q_\mathrm{rxn}=-2.66\ \mathrm{kJ}
\]

若限制试剂发生\(0.0500\ \mathrm{mol}\)反应进度：

\[
\Delta_\mathrm rH
=\frac{-2.66}{0.0500}
\approx-53.2\ \mathrm{kJ\,mol^{-1}}
\]

结论还依赖忽略散热、密度近似和溶液比热容近似。

---

## 12. 综合练习

### 概念题

1. “绝热”与“孤立”有何区别？
2. 为什么自由膨胀可有\(q=0,w=0,\Delta U=0\)，却仍有\(\Delta S>0\)？
3. 标准态为什么不自动等于298.15 K？
4. 元素参考态的标准生成焓为零，是否说明其标准摩尔熵也为零？
5. 为什么晶格形成焓和晶格解离焓的符号相反？
6. 为什么负\(\Delta G^\circ\)不能证明任意初始组成下正反应都进行？
7. 为什么催化剂不能把热力学不利反应变成热力学有利？
8. “高温有利”与“高温更快”分别属于什么判断？

### 计算题

9. 系统吸收\(350\ \mathrm J\)热，且对环境做
   \(120\ \mathrm J\)功，求\(\Delta U\)。
10. 气体在恒外压\(1.50\ \mathrm{bar}\)下由\(2.00\ \mathrm L\)膨胀到
    \(5.00\ \mathrm L\)，求\(w\)。
11. \(200.0\ \mathrm g\)水由20.0 °C升至30.0 °C，取
    \(c=4.184\ \mathrm{J\,g^{-1}\,K^{-1}}\)，求吸热量。
12. 某反应\(\Delta U=-100.0\ \mathrm{kJ\,mol^{-1}}\)，
    \(\Delta n_g=+2\)，求298.15 K时\(\Delta H\)。
13. 已知某反应的两步焓分别为
    \(+75\)和\(-120\ \mathrm{kJ\,mol^{-1}}\)，求总焓。
14. 某过程在300 K从\(1.00\ \mathrm L\)可逆等温膨胀至
    \(4.00\ \mathrm L\)，含1.00 mol理想气体，求\(\Delta S\)。
15. 某反应\(\Delta H=-80.0\ \mathrm{kJ\,mol^{-1}}\)，
    \(\Delta S=-150\ \mathrm{J\,mol^{-1}\,K^{-1}}\)，求298 K时
    \(\Delta G\)及常量近似的\(T_*\)。
16. A过程\(\Delta G=+70\ \mathrm{kJ\,mol^{-1}}\)，B过程每次
    \(\Delta G=-24\ \mathrm{kJ\,mol^{-1}}\)。最少几次B可驱动一次A？

### 论证题

17. 设计一份判断“某盐升温后更易溶解”的证据清单，不能只写“升温使熵增大”。
18. 某材料在室温保存多年。说明为什么该事实不足以证明它是热力学最稳定晶型。

---

## 13. 综合练习答案

### 练习1

<details markdown="1">
<summary>答案</summary>

绝热边界不传热，但可传功，也可能允许物质传递；孤立系统既不传能量也不传物质。

</details>

### 练习2

<details markdown="1">
<summary>答案</summary>

理想气体向真空自由膨胀时无外压功、无热交换，内能在理想模型中不变；但可占据体积
增大，可达微观状态数增加，所以熵增加。不能用实际路径的\(q/T=0\)计算不可逆熵变。

</details>

### 练习3

<details markdown="1">
<summary>答案</summary>

标准态规定参考压力或活度状态，温度必须另行注明；298.15 K只是常用数据表温度。

</details>

### 练习4

<details markdown="1">
<summary>答案</summary>

不是。生成焓为零是参考约定；298.15 K标准摩尔熵由第三定律路径获得，通常大于零。

</details>

### 练习5

<details markdown="1">
<summary>答案</summary>

两者是在相同初终态之间方向相反的过程，状态函数变化互为相反数。

</details>

### 练习6

<details markdown="1">
<summary>答案</summary>

\(\Delta G^\circ\)对应标准态。实际组成通过反应商改变\(\Delta G\)，产物大量积累时
甚至可能使正向\(\Delta G>0\)。

</details>

### 练习7

<details markdown="1">
<summary>答案</summary>

催化剂改变路径和活化势垒，不改变反应物、产物状态函数差，因此不改变\(\Delta G\)。

</details>

### 练习8

<details markdown="1">
<summary>答案</summary>

“高温有利”是焓—熵竞争或平衡趋势判断；“高温更快”通常是动力学判断。二者可能同向，
也可能相互冲突。

</details>

### 练习9

<details markdown="1">
<summary>答案</summary>

系统对环境做功，所以\(w=-120\ \mathrm J\)：

\[
\Delta U=350-120=+230\ \mathrm J
\]

</details>

### 练习10

<details markdown="1">
<summary>答案</summary>

\[
w=-p_\mathrm{ext}\Delta V
=-(1.50)(3.00)\ \mathrm{L\,bar}
\]

因\(1\ \mathrm{L\,bar}=100\ \mathrm J\)：

\[
w=-450\ \mathrm J
\]

</details>

### 练习11

<details markdown="1">
<summary>答案</summary>

\[
q=mc\Delta T
=(200.0)(4.184)(10.0)
=8.37\times10^3\ \mathrm J
\]

</details>

### 练习12

<details markdown="1">
<summary>答案</summary>

\[
\Delta H
=-100.0+2(8.314\times10^{-3})(298.15)
\approx-95.0\ \mathrm{kJ\,mol^{-1}}
\]

</details>

### 练习13

<details markdown="1">
<summary>答案</summary>

\[
\Delta H_\mathrm{total}=75-120=-45\ \mathrm{kJ\,mol^{-1}}
\]

</details>

### 练习14

<details markdown="1">
<summary>答案</summary>

\[
\Delta S=nR\ln\frac{V_2}{V_1}
=(1.00)(8.314)\ln4
\approx11.5\ \mathrm{J\,K^{-1}}
\]

</details>

### 练习15

<details markdown="1">
<summary>答案</summary>

\[
\Delta G
=-80.0-298(-0.150)
=-35.3\ \mathrm{kJ\,mol^{-1}}
\]

\[
T_*=\frac{-80.0}{-0.150}\approx533\ \mathrm K
\]

负焓、负熵反应在常量近似下低于该温度较有利。

</details>

### 练习16

<details markdown="1">
<summary>答案</summary>

两次B仍有\(70-48=+22\ \mathrm{kJ\,mol^{-1}}\)；三次B有
\(70-72=-2\ \mathrm{kJ\,mol^{-1}}\)。最少三次，并须有真实耦合机制。

</details>

### 练习17

<details markdown="1">
<summary>答案</summary>

至少需说明盐和溶剂、温区、相态及是否发生反应；测量溶解度随温度的变化；区分晶格
破坏、溶剂化和混合的焓熵贡献；检查多晶型、水合物、离子缔合和活度；确认体系已达
平衡而非受溶解速率限制。

</details>

### 练习18

<details markdown="1">
<summary>答案</summary>

材料可能处在由高活化势垒保护的亚稳态。长期存在只给出观察时间尺度上的动力学持久
证据；还需比较各晶型在指定温压下的Gibbs能，才能判断热力学稳定性。

</details>

---

## 14. 章节测验

先独立完成，再展开答案。

1. 状态函数与路径函数各举两例。
2. 写出本书第一律符号约定。
3. 定容量热直接对应\(\Delta U\)还是\(\Delta H\)？
4. 反应式反向后\(\Delta H\)怎样改变？
5. 标准生成焓的定义为何要求生成1 mol物质？
6. Born–Haber循环为什么成立？
7. 写出第二定律的宇宙熵判据。
8. 为什么不可逆过程不能一般写\(\Delta S=q_\mathrm{actual}/T\)？
9. 写出标准反应熵的“产物减反应物”公式。
10. 恒温恒压下\(\Delta G<0\)表示什么？
11. \(\Delta G<0\)为什么不表示反应瞬时发生？
12. 平衡时应为实际\(\Delta_\mathrm rG=0\)还是
    \(\Delta_\mathrm rG^\circ=0\)？
13. 哪两种焓—熵符号组合可能在正温度区变号？
14. 写出Kirchhoff关系。
15. 纸面上\(\sum\Delta G_i<0\)为什么不足以证明实验耦合？
16. 外加电功驱动正\(\Delta G\)反应是否违反第二定律？

<details markdown="1">
<summary>章节测验答案</summary>

1. 状态函数如\(U,H\)，路径函数如\(q,w\)；
2. \(\Delta U=q+w\)，吸热和对系统做功为正；
3. 在无其他功的刚性容器中直接对应\(\Delta U\)；
4. 变号；
5. 使摩尔生成量和反应计量基准明确；
6. 焓是状态函数，闭合路径总焓变为零；
7. 自发过程\(\Delta S_\mathrm{univ}>0\)，可逆平衡极限为0；
8. 熵需用连接同一初终态的可逆路径热积分计算；
9. \(\Delta_\mathrm rS^\circ=\sum_p\nu S^\circ-\sum_r\nu S^\circ\)；
10. 在给定组成与约束下，所写正向可降低体系Gibbs能；
11. 它不包含活化势垒和机理；
12. 实际\(\Delta_\mathrm rG=0\)；
13. \((\Delta H<0,\Delta S<0)\)和
    \((\Delta H>0,\Delta S>0)\)；
14. \(\mathrm d\Delta_\mathrm rH/\mathrm dT=\Delta_\mathrm rC_p\)；
15. 还需共同中间体、物质通道或功传递等物理连接；
16. 不违反；扩大边界后须计入电源能量变化，整体仍满足第二定律。

</details>

---

## 15. 自检清单

- [ ] 我会先划系统边界，再写\(q,w\)；
- [ ] 我会区分状态函数、过程量、强度量和广度量；
- [ ] 我能用本书符号约定处理膨胀与压缩功；
- [ ] 我知道\(q_p=\Delta H\)、\(q_V=\Delta U\)的条件；
- [ ] 我能完成咖啡杯与量热弹计算；
- [ ] 我会让热化学方程式、物态和焓变一起反向或倍乘；
- [ ] 我能用生成焓和Hess定律计算反应焓；
- [ ] 我会统一晶格形成/解离及电子亲和步骤的符号；
- [ ] 我能由可逆路径计算加热、相变和理想气体膨胀熵变；
- [ ] 我不会把“混乱度”当作熵的完整定义；
- [ ] 我能用宇宙熵和Gibbs能判断方向；
- [ ] 我会区分标准量和实际组成；
- [ ] 我会区分自发、快速、完全和催化；
- [ ] 我能判断四种焓—熵组合的温度趋势；
- [ ] 我知道何时需要热容修正和分段积分；
- [ ] 我不会把反应式相加自动当成真实耦合。

---

## 16. 跨章接口

### 回看第5章

- 相变温度对应指定压力下两相Gibbs能相等；
- 溶解方向由晶格破坏、溶剂化、混合和可能反应的总自由能决定；
- Born–Haber循环把晶格形成焓放进完整Hess账本；
- 缺陷可因构型熵补偿形成焓代价，平衡浓度取决于形成自由能与外界条件；
- “晶体更稳定”必须说明温度、压力、组成、相态和所比较的热力学量。

### 第7章回看

- \(\Delta G<0\)不回答多快，
  [7.1至7.3](../07-kinetics-equilibrium/index.md)用速率方程、活化能和机理处理；
- \(\Delta G^\circ\)不回答任意组成的方向，
  [7.5](../07-kinetics-equilibrium/07-05-reaction-quotient-gibbs-shift.md)用
  \(\Delta G=\Delta G^\circ+RT\ln Q=RT\ln(Q/K)\)处理；
- 平衡时实际\(\Delta G=0\)，第7章7.4至7.6用无量纲\(K\)、活度和守恒定量描述
  平衡位置；
- 催化剂改变达到平衡的路径和时间，不改变同温度下的平衡常数。

---

## 17. 本章复核结论

章内复核后，本章形成了三条连续且不越界的结论链：

1. **能量链**：系统边界
   \(\rightarrow\Delta U=q+w\rightarrow H\rightarrow\)量热与Hess循环；
2. **方向链**：第二定律
   \(\rightarrow\Delta S_\mathrm{univ}\rightarrow G\rightarrow\)恒温恒压方向；
3. **边界链**：标准态与实际组成、方向与速率、数学相加与物理耦合彼此分开。

复核中特别保留以下限制：

- \(q_p=\Delta H\)和\(q_V=\Delta U\)均带条件；
- 标准态不等于STP，也不自动等于298.15 K；
- 元素参考态生成量为零与标准摩尔熵为零不是同一件事；
- \(T_*=\Delta H/\Delta S\)是有温区和相态边界的近似；
- 负\(\Delta G\)不推出快速、完全或无需物理耦合。

第7章已在这些边界上继续，并保持本章固定的热力学符号。
