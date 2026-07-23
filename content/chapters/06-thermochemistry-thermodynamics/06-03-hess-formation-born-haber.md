---
title: "6.3 Hess定律、生成焓与Born–Haber循环"
chapter: 6
unit: 6.3
status: draft-v0.1
estimated_study_time: "140–190分钟"
level: core
---

# 6.3 Hess定律、生成焓与Born–Haber循环

## 本课要解决的问题

某个反应无法直接、单独、完全地实施时，怎样仍然得到它的焓变？“标准生成焓为零”
适用于哪些物质？标准态是否等于\(25^\circ\mathrm C\)？为什么数据表中的氯原子
电子亲和能常写成正值，而Born–Haber循环中的电子结合步骤却写成负焓？怎样用升华、
解离、电离、电子结合和晶格形成拼出\(\ce{NaCl(s)}\)的生成焓？

本课的核心依据是：

> 焓是状态函数。只要总过程的初态、终态和化学计量相同，总焓变与人为选择的计算路径
> 无关。

---

## 学习目标

完成本课后，你应该能够：

1. 用状态函数解释Hess定律；
2. 翻转、倍乘和相加热化学方程式；
3. 检查中间物种是否完全消去；
4. 定义标准态和标准反应焓；
5. 说明标准压力与温度必须分别注明；
6. 定义标准摩尔生成焓；
7. 识别元素的参考态；
8. 使用生成焓计算标准反应焓；
9. 区分反应焓的\(\mathrm{kJ}\)与摩尔反应焓的\(\mathrm{kJ\,mol^{-1}}\)；
10. 建立一价离子盐的Born–Haber循环；
11. 统一原子化、电离、电子结合和晶格焓的符号；
12. 由循环求晶格形成焓或晶格解离焓；
13. 说明电子亲和能列表符号与电子结合焓的关系；
14. 识别模型数据、实验热化学量与条件的不确定性。

---

## 学习本课之前

- [6.1](./06-01-system-state-heat-work-internal-energy.md)中的状态函数；
- [6.2](./06-02-enthalpy-heat-capacity-calorimetry.md)中的焓、反应焓和物态；
- [5.5](../05-intermolecular-solids/05-05-lattice-stability-energy.md)中的晶格形成/
  解离方向；
- 第1章的配平、计量数和反应进度。

### 3分钟诊断

1. 一个反应式反向时，\(\Delta H\)怎样变化？
2. 一个反应式整体乘3时，\(\Delta H\)怎样变化？
3. \(\ce{C(graphite)}\)与\(\ce{C(diamond)}\)的标准生成焓是否都按约定为零？
4. “标准反应焓”中的标准符号是否自动规定温度为298.15 K？

<details markdown="1">
<summary>查看诊断答案</summary>

1. 变号；
2. 乘3；
3. 不是；指定条件下碳的参考态是石墨，金刚石不是参考态；
4. 不自动规定；标准态主要规定参考压力/组成状态，温度必须另行给出。

</details>

---

## 1. Hess定律来自状态函数

设反应物状态为A，产物状态为B。无论：

- A直接变为B；
- A先变为中间态C再变为B；
- 用若干可测反应代数拼接；

总焓变都满足：

\[
\Delta H_{A\to B}=H_B-H_A
\]

若走A→C→B：

\[
\Delta H_{A\to B}
=
(H_C-H_A)+(H_B-H_C)
\]

\[
\boxed{
\Delta H_{A\to B}
=
\Delta H_{A\to C}
+\Delta H_{C\to B}
}
\]

中间态焓\(H_C\)代数消去。这就是Hess定律的本质。

### 1.1 Hess定律不要求真实反应经过所写路径

计算路径可以包含难以同时观察的假想步骤，只要：

- 每一步对应定义明确的状态变化；
- 数据属于相容温度、压力和参考状态；
- 相加后的净方程式等于目标方程式。

它不是在宣称反应机理真的逐步经过这些中间体。

---

## 2. 热化学方程式的三条代数规则

### 2.1 反向：焓变号

\[
\ce{A -> B}
\qquad \Delta H=x
\]

则：

\[
\ce{B -> A}
\qquad \Delta H=-x
\]

### 2.2 倍乘：焓同倍乘

\[
\ce{A -> 2B}
\qquad \Delta H=x
\]

若整体乘\(\tfrac12\)：

\[
\ce{1/2 A -> B}
\qquad \Delta H=\frac x2
\]

### 2.3 相加：焓相加

把方程式左右两端像代数式相加，出现在两边的相同物种、相同物态可消去，焓变也相加。

只有化学式和物态都相同才可消去。例如\(\ce{H2O(l)}\)与\(\ce{H2O(g)}\)不能直接
消去；它们之间还差汽化过程。

---

## 3. worked example：由燃烧焓求CO生成焓

已知：

\[
\ce{C(graphite) + O2(g) -> CO2(g)}
\qquad
\Delta H_1=-393.5\ \mathrm{kJ\,mol^{-1}}
\]

\[
\ce{CO(g) + 1/2 O2(g) -> CO2(g)}
\qquad
\Delta H_2=-283.0\ \mathrm{kJ\,mol^{-1}}
\]

目标：

\[
\ce{C(graphite) + 1/2 O2(g) -> CO(g)}
\]

将第二式反向：

\[
\ce{CO2(g) -> CO(g) + 1/2 O2(g)}
\qquad
-\Delta H_2=+283.0\ \mathrm{kJ\,mol^{-1}}
\]

与第一式相加，\(\ce{CO2(g)}\)消去：

\[
\Delta H
=
-393.5+283.0
=-110.5\ \mathrm{kJ\,mol^{-1}}
\]

### 即时检查1

若忘记把第二式焓变号，会出现什么检查信号？

<details markdown="1">
<summary>答案</summary>

方程式反向但焓未反向，违反同一过程正逆焓互为相反数；所得\(-676.5\)也无法由正确
状态函数代数得到。每次操作应同时写方程式和焓，不能只在脑中翻转。

</details>

---

## 4. “标准”到底规定什么

标准态是人为选定的参考状态。IUPAC常用标准压力为：

\[
p^\circ=1\ \mathrm{bar}=10^5\ \mathrm{Pa}
\]

### 4.1 气体

气体标准态是纯物质在标准压力下、按理想气体行为外推的假想状态。

### 4.2 纯液体和纯固体

是该纯物质在标准压力、指定温度下的纯相状态；若有多晶型，必须明确是哪一种。

### 4.3 溶液

溶质标准态还涉及标准浓度或标准质量摩尔浓度及无限稀释行为约定。本章只使用表中已
定义的水溶液标准生成量，不在本节展开活度；活度的统一定义见
[7.4](../07-kinetics-equilibrium/07-04-dynamic-equilibrium-activity-constant.md)。

### 4.4 标准态不等于STP，也不自动等于298.15 K

- 上标\({}^\circ\)表示各物种取其标准态；
- 温度是独立条件；
- 热化学表常列\(298.15\ \mathrm K\)，必须显式注明；
- STP是特定温压组合，不能与“任意温度的标准态”混用；
- 旧资料可能使用\(1\ \mathrm{atm}\)，读取数据时应检查。

---

## 5. 标准反应焓

标准反应焓写作：

\[
\Delta_\mathrm rH^\circ
\]

它表示按所写反应方程式发生单位反应进度时，各反应物和产物均处于指定温度的标准态，
体系的焓变。

若写成：

\[
\ce{\sum_i \nu_i R_i -> \sum_j \nu_j P_j}
\]

则“单位反应进度”由这些计量数定义。反应式倍乘，\(\Delta_\mathrm rH^\circ\)也倍乘。

---

## 6. 标准摩尔生成焓

物质B的标准摩尔生成焓：

\[
\Delta_\mathrm fH^\circ(\mathrm B)
\]

是在指定温度下，由各组成元素的**参考态**生成1 mol B（处于标准态）的标准反应焓。

例如：

\[
\ce{H2(g) + 1/2 O2(g) -> H2O(l)}
\]

给出\(\ce{H2O(l)}\)的标准生成焓。

### 6.1 必须生成恰好1 mol

\[
\ce{2H2(g)+O2(g)->2H2O(l)}
\]

的焓是2 mol水的生成焓总量；除以2才是标准摩尔生成焓。

### 6.2 元素参考态的生成焓为零

按约定：

\[
\Delta_\mathrm fH^\circ
(\text{元素在指定温度的参考态})=0
\]

常见参考态包括：

- \(\ce{H2(g)}\)、\(\ce{N2(g)}\)、\(\ce{O2(g)}\)；
- \(\ce{C(graphite)}\)；
- \(\ce{Br2(l)}\)在298.15 K；
- 金属的稳定标准固态。

### 6.3 不是“所有单质都为零”

- \(\ce{O3(g)}\)不是氧的参考态；
- \(\ce{C(diamond)}\)不是298.15 K常用碳参考态；
- 气态金属原子不是固态金属参考态；
- 非参考同素异形体的标准生成焓一般不为零。

零值是参考基线约定，不表示元素参考态“没有焓”。

---

## 7. 用生成焓计算反应焓

对反应：

\[
\sum_i \nu_i\ce{R_i}
\longrightarrow
\sum_j \nu_j\ce{P_j}
\]

\[
\boxed{
\Delta_\mathrm rH^\circ
=
\sum_j\nu_j\Delta_\mathrm fH^\circ(\ce{P_j})
-
\sum_i\nu_i\Delta_\mathrm fH^\circ(\ce{R_i})
}
\]

口诀“产物减反应物”只有在每项都乘计量数、物态正确、条件一致时才可靠。

### 示例：甲烷燃烧

\[
\ce{CH4(g)+2O2(g)->CO2(g)+2H2O(l)}
\]

取代表性数据：

\[
\Delta_\mathrm fH^\circ(\ce{CH4(g)})=-74.8
\]

\[
\Delta_\mathrm fH^\circ(\ce{CO2(g)})=-393.5
\]

\[
\Delta_\mathrm fH^\circ(\ce{H2O(l)})=-285.8
\]

单位均为\(\mathrm{kJ\,mol^{-1}}\)，而
\(\Delta_\mathrm fH^\circ(\ce{O2(g)})=0\)。

\[
\Delta_\mathrm rH^\circ
=
\left[-393.5+2(-285.8)\right]
-
\left[-74.8+2(0)\right]
\]

\[
\Delta_\mathrm rH^\circ=-890.3\ \mathrm{kJ\,mol^{-1}}
\]

若产物写成\(\ce{H2O(g)}\)，结果会少放出水凝结对应的能量，数值不能沿用。

---

## 8. 数据表计算的可靠流程

1. 配平方程式；
2. 标出每个物种的物态；
3. 检查温度和标准压力约定；
4. 逐项抄写正确物态的\(\Delta_\mathrm fH^\circ\)；
5. 每项乘计量数；
6. 计算“产物和减反应物和”；
7. 写单位并说明按所写反应；
8. 用放热/吸热常识作方向检查，但不以直觉替代数据。

---

## 9. Born–Haber循环在做什么

直接把\(\ce{Na(s)}\)和\(\ce{Cl2(g)}\)分解成气态离子再结晶，并不适合逐步量热。
但可设计一条假想路径：

```text
元素参考态
→ 气态原子
→ 气态正、负离子
→ 离子晶体
```

这条路径与直接生成\(\ce{NaCl(s)}\)有相同初、终态，所以Hess定律给出闭合能量账本。

Born–Haber循环不是NaCl真实成核机理。

---

## 10. NaCl循环的五类步骤

目标生成反应：

\[
\ce{Na(s) + 1/2 Cl2(g) -> NaCl(s)}
\qquad
\Delta_\mathrm fH^\circ
\]

### 10.1 Na原子化

\[
\ce{Na(s) -> Na(g)}
\qquad
\Delta_\mathrm{at}H^\circ>0
\]

需克服金属凝聚，吸热。

### 10.2 Na第一电离

\[
\ce{Na(g) -> Na+(g) + e-(g)}
\qquad
\Delta_\mathrm{ion}H^\circ>0
\]

移去电子需要能量。

### 10.3 Cl原子化

\[
\ce{1/2 Cl2(g) -> Cl(g)}
\qquad
\frac12D(\ce{Cl-Cl})>0
\]

注意只生成1 mol Cl原子，所以使用一半键解离焓。

### 10.4 Cl结合电子

\[
\ce{Cl(g)+e-(g)->Cl-(g)}
\qquad
\Delta H_\mathrm{eg}<0
\]

对Cl第一电子结合通常放热。

### 10.5 气态离子形成晶格

\[
\ce{Na+(g)+Cl-(g)->NaCl(s)}
\qquad
\Delta H_\mathrm{latt,form}<0
\]

若数据表给晶格解离焓：

\[
\ce{NaCl(s)->Na+(g)+Cl-(g)}
\qquad
\Delta H_\mathrm{latt,diss}>0
\]

二者互为相反数。

---

## 11. 电子亲和能的符号陷阱

IUPAC常把电子亲和能定义为从阴离子移去电子所需能量，等价地说，是中性粒子结合电子
时释放的能量。因此稳定结合电子的Cl常列出正的电子亲和能数值\(EA>0\)。

但Born–Haber循环写的是过程：

\[
\ce{Cl(g)+e-(g)->Cl-(g)}
\]

该过程释放能量，所以：

\[
\boxed{\Delta H_\mathrm{eg}\approx-EA}
\]

处理数据时不要仅看表头“electron affinity”，必须阅读定义：

- 若表列“释放能量的大小”，循环中加负值；
- 若表已列电子结合焓，直接按其带符号值使用；
- 第二电子结合常因向阴离子再加电子而吸热，不能套第一电子亲和趋势。

---

## 12. NaCl数值示例

取一组用于教学的代表性四舍五入数据：

| 步骤 | \(\Delta H^\circ/\mathrm{kJ\,mol^{-1}}\) |
|---|---:|
| \(\ce{Na(s)->Na(g)}\) | \(+107.3\) |
| \(\ce{Na(g)->Na+(g)+e-}\) | \(+495.8\) |
| \(\ce{1/2Cl2(g)->Cl(g)}\) | \(+121.7\) |
| \(\ce{Cl(g) + e- -> Cl-(g)}\) | \(-349.0\) |
| \(\ce{Na(s)+1/2Cl2(g)->NaCl(s)}\) | \(-411.1\) |

Hess账本：

\[
\Delta_\mathrm fH^\circ
=
\Delta_\mathrm{at}H^\circ(\ce{Na})
+\mathrm{IE}_1(\ce{Na})
+\frac12D(\ce{Cl2})
+\Delta H_\mathrm{eg}(\ce{Cl})
+\Delta H_\mathrm{latt,form}
\]

代入：

\[
-411.1
=
107.3+495.8+121.7-349.0
+\Delta H_\mathrm{latt,form}
\]

\[
\boxed{
\Delta H_\mathrm{latt,form}
\approx-786.9\ \mathrm{kJ\,mol^{-1}}
}
\]

对应晶格解离焓：

\[
\boxed{
\Delta H_\mathrm{latt,diss}
\approx+786.9\ \mathrm{kJ\,mol^{-1}}
}
\]

不同可靠数据表因温度修正、所用量的精确定义和舍入可能给出略有差异的数值；循环内部
必须使用同一套相容数据。

### 即时检查2

如果把电子结合步骤误写成\(+349.0\)，求得的晶格形成焓会怎样偏差？

<details markdown="1">
<summary>答案</summary>

会被迫得到约\(-1485\ \mathrm{kJ\,mol^{-1}}\)的过负结果，用虚假的巨大晶格稳定化
补偿错误的吸热电子结合项。错误量级约为两倍电子亲和能，即\(698\ \mathrm{kJ\,mol^{-1}}\)。

</details>

---

## 13. 多价盐的额外步骤

对\(\ce{MgO}\)等盐，循环还需：

- Mg的第一、第二电离；
- \(\ce{O2}\)的原子化；
- O的第一、第二电子结合；
- 正确的化学计量；
- 气态\(\ce{Mg^{2+}}\)与\(\ce{O^{2-}}\)形成晶格。

第二电离能和第二电子结合焓不能省略。特别是：

\[
\ce{O-(g)+e-(g)->O^{2-}(g)}
\]

通常强烈吸热，因为电子被加入已带负电的粒子。最终离子固体仍可稳定，是因为晶格形成
释放的大量能量与其他步骤共同决定总生成焓。

这说明“孤立气态\(\ce{O^{2-}}\)形成不利”与“\(\ce{O^{2-}}\)在晶体中稳定”并不矛盾。

---

## 14. Born–Haber循环能回答什么

它可用于：

- 由其他热化学量间接求晶格焓；
- 检查数据的内部一致性；
- 比较电离、电子结合、原子化和晶格稳定化的竞争；
- 解释某些氧化态或化学计量为什么需要巨大晶格补偿；
- 将第3章原子能量与第5章固体结构连接起来。

它不能单独：

- 给出反应速率或生成机理；
- 从晶格焓唯一预测晶体结构；
- 把真实成键证明为100%离子；
- 忽略离子极化、共价性和温度修正；
- 直接给出非标准条件下的反应方向。

---

## 15. Hess循环的代数检查

完成循环后做三项审计。

### 15.1 物质审计

所有中间物种：

\[
\ce{Na(g), Na+(g), Cl(g), Cl-(g), e-(g)}
\]

必须在方程式相加后完全消去，只留下目标反应物和产物。

### 15.2 电荷与电子审计

电子在电离步骤生成、在电子结合步骤消耗；净反应不能凭空留下电子或净电荷。

### 15.3 数量与物态审计

- \(\tfrac12\ce{Cl2}\)只生成1 mol Cl；
- 每一步按1 mol \(\ce{NaCl}\)计；
- 固态Na、气态Na原子和气态Na离子不可混用；
- 晶格步骤必须连接气态离子与固体。

---

## 16. 常见误区

1. **Hess路径就是反应机理**：它只是状态函数计算路径。
2. **方程式反向但焓不变号**：正逆过程焓互为相反数。
3. **方程式乘系数但焓不缩放**：焓变是广度变化。
4. **同化学式即可消去**：物态不同不能直接消去。
5. **标准态一定是298.15 K**：温度必须另行注明。
6. **所有单质生成焓都为零**：只有指定温度的元素参考态为零。
7. **标准生成焓生成任意摩尔数**：定义要求生成1 mol目标物。
8. **生成焓公式忘记计量系数**：每项都要乘\(\nu\)。
9. **电子亲和能正值直接作为电子结合正焓**：需先看数据定义。
10. **晶格能不写方向**：必须区分形成负值与解离正值。
11. **Born–Haber循环证明真实离子电荷**：它使用离子模型组织能量，不是电子密度测量。
12. **不同数据表任意拼接**：温度、标准压力、定义和舍入应相容。

---

## 17. 本课练习

1. 说明Hess定律为什么不依赖实际反应路径。
2. 已知\(\ce{A->B}\)的\(\Delta H=+40\ \mathrm{kJ}\)，写出
   \(\ce{2B->2A}\)的焓变。
3. 为什么\(\ce{H2O(l)}\)与\(\ce{H2O(g)}\)不能在Hess相加中直接消去？
4. 定义标准摩尔生成焓，并说明元素参考态零值的含义。
5. 判断\(\ce{O2(g)}\)、\(\ce{O3(g)}\)、\(\ce{C(graphite)}\)、
   \(\ce{C(diamond)}\)在298.15 K哪些标准生成焓按约定为零。
6. 用\(\Delta_\mathrm fH^\circ\)写出任意反应的标准反应焓公式。
7. 取\(\Delta_\mathrm fH^\circ[\ce{CO2(g)}]=-393.5\)、
   \(\Delta_\mathrm fH^\circ[\ce{CO(g)}]=-110.5\ \mathrm{kJ\,mol^{-1}}\)，
   求\(\ce{2CO(g)+O2(g)->2CO2(g)}\)的焓变。
8. 列出NaCl Born–Haber循环的五类步骤并判断符号。
9. 为什么Cl的电子亲和能表值为正，而电子结合步骤焓为负？
10. 使用本节NaCl数据复算晶格解离焓。
11. 建立\(\ce{MgCl2(s)}\)循环时，NaCl循环之外必须增加或改变哪些计量步骤？
12. 判断：“\(\ce{O^{2-}(g)}\)的第二电子结合吸热，所以含氧化物离子的晶体不可能稳定。”

---

## 18. 练习答案

### 练习1

<details markdown="1">
<summary>完整答案</summary>

焓为状态函数，\(\Delta H=H_f-H_i\)。不同路径的中间态焓在代数相加中消去，只要
初态、终态、物态和计量相同，总焓变相同。

</details>

### 练习2

<details markdown="1">
<summary>完整答案</summary>

先反向得\(\ce{B->A}\)，\(\Delta H=-40\ \mathrm{kJ}\)；再乘2：

\[
\ce{2B->2A}
\qquad
\Delta H=-80\ \mathrm{kJ}
\]

</details>

### 练习3

<details markdown="1">
<summary>完整答案</summary>

二者是不同热力学状态，焓差为相应温压下的汽化焓。只有化学式、物态和条件均相同的
项才可代数消去。

</details>

### 练习4

<details markdown="1">
<summary>完整答案</summary>

标准摩尔生成焓是在指定温度由组成元素参考态生成1 mol标准态物质的标准反应焓。
参考态生成焓置零是选择热化学基线，不表示其绝对焓为零。

</details>

### 练习5

<details markdown="1">
<summary>完整答案</summary>

\(\ce{O2(g)}\)和\(\ce{C(graphite)}\)是常用参考态，生成焓为零；
\(\ce{O3(g)}\)和\(\ce{C(diamond)}\)不是相应参考态，通常不为零。

</details>

### 练习6

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta_\mathrm rH^\circ
=
\sum_\mathrm{products}\nu\Delta_\mathrm fH^\circ
-
\sum_\mathrm{reactants}\nu\Delta_\mathrm fH^\circ
\]

</details>

### 练习7

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta_\mathrm rH^\circ
=
2(-393.5)-[2(-110.5)+0]
=-566.0\ \mathrm{kJ}
\]

这是按所写反应（消耗2 mol CO）的焓；若写每摩尔CO则为
\(-283.0\ \mathrm{kJ\,mol^{-1}}\)。

</details>

### 练习8

<details markdown="1">
<summary>完整答案</summary>

Na固体原子化（正）、Na气态原子电离（正）、半摩尔\(\ce{Cl2}\)解离为Cl原子
（正）、Cl结合电子（负）、气态\(\ce{Na+}\)和\(\ce{Cl-}\)形成晶格（负）。

</details>

### 练习9

<details markdown="1">
<summary>完整答案</summary>

常见电子亲和能正值表示结合电子时释放能量的大小，或从阴离子移去电子所需能量。
Born–Haber步骤按\(\ce{Cl + e- -> Cl-}\)方向写，体系焓降低，所以步骤焓约为\(-EA\)。

</details>

### 练习10

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta H_\mathrm{latt,form}
=
-411.1-107.3-495.8-121.7+349.0
=-786.9\ \mathrm{kJ\,mol^{-1}}
\]

所以：

\[
\Delta H_\mathrm{latt,diss}
=+786.9\ \mathrm{kJ\,mol^{-1}}
\]

</details>

### 练习11

<details markdown="1">
<summary>完整答案</summary>

需生成\(\ce{Mg^{2+}(g)}\)，所以包括Mg原子化、第一和第二电离；需由
\(\ce{Cl2(g)}\)生成2 mol Cl原子，使用完整一摩尔\(\ce{Cl-Cl}\)解离焓；两颗Cl原子
各结合一个电子；最后\(\ce{Mg^{2+}(g)+2Cl-(g)->MgCl2(s)}\)。

</details>

### 练习12

<details markdown="1">
<summary>完整答案</summary>

错误。总生成焓包含金属原子化和电离、氧原子化、两次电子结合及晶格形成等全部步骤。
高电荷离子晶格形成可释放大量能量，补偿孤立气相第二电子结合的不利；还需考虑真实
成键和结构。

</details>

---

## 19. 本课小结

1. Hess定律源于焓的状态函数性质，总焓变只由初、终态决定。
2. 热化学方程式反向时焓变号，倍乘时焓同倍乘，相加时焓相加。
3. 只有化学式、物态和条件相同的中间项才能消去。
4. IUPAC常用标准压力为\(1\ \mathrm{bar}\)；标准态不自动规定298.15 K。
5. 标准摩尔生成焓指由元素参考态生成1 mol标准态物质的焓变。
6. 只有元素参考态的\(\Delta_\mathrm fH^\circ\)按约定为零，其他同素异形体不自动为零。
7. 标准反应焓等于产物生成焓计量和减去反应物生成焓计量和。
8. 反应焓必须与所写方程式、物态、温度和标准态约定绑定。
9. Born–Haber循环把元素参考态经气态原子、气态离子连接到离子晶体。
10. 原子化和电离通常吸热，第一电子结合对卤素通常放热，晶格形成通常强烈放热。
11. 正的电子亲和能常表示释放能量的大小，电子结合步骤焓需按过程方向写负。
12. 晶格形成焓为负，晶格解离焓为正；使用前必须确认数据方向。
13. 多价盐循环必须纳入全部逐级电离和电子结合步骤以及正确计量。
14. Born–Haber循环是能量账本，不是真实机理，也不证明成键绝对纯离子。

---

## 20. 下一课

焓能解释能量释放或吸收，却不能单独决定变化方向：

> 为什么气体扩散、物质混合和某些吸热过程仍可自发？熵怎样描述可达微观状态和能量
> 分散？怎样判断相变、气体物质的量变化和反应的标准熵变符号？

---

## 21. 术语与资料来源

本页标准态和电子亲和能定义依据IUPAC资料核对，数据边界参考NIST，访问日期为
2026-07-24：

- [IUPAC Gold Book：standard state](https://goldbook.iupac.org/terms/view/S05925)
- [IUPAC Green Book：标准压力\(1\ \mathrm{bar}\)及热力学数据约定](https://publications.iupac.org/books/gbook/green_book_2ed.pdf)
- [IUPAC Gold Book：electron affinity](https://goldbook.iupac.org/terms/view/E01977)
- [IUPAC：标准热力学量的符号与状态说明](https://publications.iupac.org/pac/1982/pdf/5406x1239.pdf)
- [NIST Chemistry WebBook：气相离子热化学数据说明](https://webbook.nist.gov/chemistry/ion/)
- [NIST Chemistry WebBook：NaCl热化学数据入口](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7647145&Units=SI)

进一步参考：

- Peter Atkins, Julio de Paula, *Physical Chemistry*, Hess's law and
  thermochemical cycles.
- Catherine E. Housecroft, Alan G. Sharpe, *Inorganic Chemistry*,
  Born–Haber cycles and ionic bonding.
