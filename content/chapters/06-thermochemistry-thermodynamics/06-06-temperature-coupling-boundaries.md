---
title: "6.6 温度、耦合与热力学边界"
chapter: 6
unit: 6.6
status: draft-v0.1
estimated_study_time: "120–165分钟"
level: core
---

# 6.6 温度、耦合与热力学边界

## 本课要解决的问题

为什么有些反应低温有利、高温不利，另一些恰好相反？令
\(\Delta G^\circ=0\)求出的温度何时只是估算值？一个本来热力学不利的反应怎样被
另一个过程驱动？外加电功使反应发生是否违反第二定律？完成一次热力学计算后，还要
检查哪些边界，才能避免把“标准态、方向和近似”误写成“实际产率、速率和定论”？

本课把本章最后三条推理线收束起来：

```text
温度改变TΔS的权重
→ 必要时用热容修正ΔH(T)与ΔS(T)
→ 将真正耦合的过程按状态函数相加
→ 用总ΔG判断整体方向
→ 再检查组成、压力、相态、非理想性、动力学与数据误差
```

---

## 学习目标

完成本课后，你应该能够：

1. 在\(\Delta H,\Delta S\)近似恒定时估算\(\Delta G\)变号温度；
2. 正确解释四种焓—熵符号组合的温度趋势；
3. 说明“临界温度”不是所有反应都存在的正温度；
4. 用Kirchhoff关系修正不同温度下的反应焓；
5. 用热容积分修正反应熵；
6. 识别跨越相变时必须分段积分；
7. 将耦合反应按反应式和Gibbs能正确相加；
8. 说明“两个反应同时发生”不自动等于“发生了耦合”；
9. 解释外界做功怎样驱动\(\Delta G>0\)的过程；
10. 区分热力学稳定、动力学持久与亚稳态；
11. 区分标准态趋势、实际组成方向、平衡位置和反应速率；
12. 对接第7章的反应商、平衡和动力学。

---

## 学习本课之前

- [6.3](./06-03-hess-formation-born-haber.md)中的Hess定律；
- [6.4](./06-04-entropy-direction.md)中的熵与第二定律；
- [6.5](./06-05-gibbs-spontaneity.md)中的Gibbs判据；
- 对数、Kelvin温度和\(\mathrm J/\mathrm{kJ}\)换算。

### 3分钟诊断

1. 若\(\Delta H^\circ<0,\Delta S^\circ<0\)，升温一定更有利吗？
2. 令\(\Delta G^\circ=0\)所得温度是否一定是真实反应的固定“启动温度”？
3. 把任意两个反应式相加，是否就证明实验中发生了反应耦合？
4. \(\Delta G<0\)是否足以预言反应能在一分钟内观察到？

<details markdown="1">
<summary>查看诊断答案</summary>

1. 不一定；在常量近似下升温使正的\(-T\Delta S^\circ\)惩罚增大，反而更不利；
2. 不是；它依赖标准态和常量近似，实际转变还受组成、分压、活度、热容和相态影响；
3. 不能；还需物质、能量或共同中间体使两个过程在物理上连通；
4. 不能；速率取决于动力学势垒和机理。

</details>

---

## 1. 温度为什么能改变方向

恒温下：

\[
\Delta G=\Delta H-T\Delta S
\]

温度直接改变熵项的权重。但是升温并不等于“熵一定增大，所以所有过程都更自发”。
判断的是反应熵变\(\Delta S\)以及\(-T\Delta S\)的符号：

| \(\Delta H\) | \(\Delta S\) | 常量近似下的温度趋势 |
|---|---|---|
| \(-\) | \(+\) | \(\Delta G<0\)，各温度均有利 |
| \(+\) | \(-\) | \(\Delta G>0\)，各温度均不利 |
| \(-\) | \(-\) | 低温可能有利，高温可能不利 |
| \(+\) | \(+\) | 低温可能不利，高温可能有利 |

表中“各温度”只表示在\(\Delta H,\Delta S\)符号不变且近似恒定的温区内。若跨越很大
温区、发生相变或热容差明显，必须修正。

---

## 2. 变号温度

令：

\[
\Delta G=0
\]

若\(\Delta H\)和\(\Delta S\)在温区内近似不变，且\(\Delta S\ne0\)：

\[
\boxed{
T_*=\frac{\Delta H}{\Delta S}
}
\]

单位必须相容。例如\(\Delta H\)用
\(\mathrm{kJ\,mol^{-1}}\)时，应把\(\Delta S\)换成
\(\mathrm{kJ\,mol^{-1}\,K^{-1}}\)。

### 2.1 哪些组合有正的变号温度

- \(\Delta H>0,\Delta S>0\)：\(T_*>0\)，高于\(T_*\)时可能有利；
- \(\Delta H<0,\Delta S<0\)：\(T_*>0\)，低于\(T_*\)时可能有利；
- \(\Delta H,\Delta S\)异号：比值为负，在正的绝对温度范围内没有由该近似给出的
  变号点。

不能只算出一个数便停止；还要判断这个数是否为正、是否落在物质保持相同相态和数据
近似有效的温区内。

### 示例1：氨合成的标准态估算

沿用6.5的数据：

\[
\Delta_\mathrm rH^\circ=-92.2\ \mathrm{kJ\,mol^{-1}}
\]

\[
\Delta_\mathrm rS^\circ=-0.1981\ \mathrm{kJ\,mol^{-1}\,K^{-1}}
\]

\[
T_*=
\frac{-92.2}{-0.1981}
\approx465\ \mathrm K
\]

在常量近似下，标准反应Gibbs能在低于约465 K时为负，高于该温度时为正。

这**不是**“高于465 K氨就不能生成”。实际反应方向由当时的氮、氢、氨活度决定；
温度还同时影响反应速率和平衡组成。
[7.3](../07-kinetics-equilibrium/07-03-temperature-mechanism-catalysis.md)用Arrhenius关系
处理速率常数，[7.5](../07-kinetics-equilibrium/07-05-reaction-quotient-gibbs-shift.md)
用\(Q\)和\(K\)处理方向与平衡。

### 即时检查1

某反应\(\Delta H^\circ=+72.0\ \mathrm{kJ\,mol^{-1}}\)，
\(\Delta S^\circ=+120\ \mathrm{J\,mol^{-1}\,K^{-1}}\)。估算变号温度并判断哪侧有利。

<details markdown="1">
<summary>答案</summary>

\[
T_*=\frac{72.0}{0.120}=600\ \mathrm K
\]

该反应为\(\Delta H>0,\Delta S>0\)，故常量近似下\(T>600\ \mathrm K\)时
\(\Delta G^\circ<0\)。

</details>

---

## 3. “分解温度”为什么依赖条件

以：

\[
\ce{CaCO3(s)->CaO(s)+CO2(g)}
\]

为例，取一组298 K附近的代表性数据：

\[
\Delta_\mathrm rH^\circ\approx178.3\ \mathrm{kJ\,mol^{-1}}
\]

\[
\Delta_\mathrm rS^\circ\approx160.5\ \mathrm{J\,mol^{-1}\,K^{-1}}
\]

常量近似给出：

\[
T_*\approx
\frac{178.3}{0.1605}
\approx1111\ \mathrm K
\]

这个数描述的是规定标准态和近似数据下\(\Delta_\mathrm rG^\circ=0\)的位置，不是与
实验条件无关的材料常数。真实分解平衡显著依赖\(\ce{CO2}\)分压；抽走
\(\ce{CO2}\)和置于高压\(\ce{CO2}\)中不会得到相同的转变条件。跨越数百K时还应
考虑热容修正。

> 对产生或消耗气体的反应，只报告一个温度却不报告气体分压，通常是不完整的。

---

## 4. 反应焓随温度变化：Kirchhoff关系

各物质的焓随温度改变，其斜率由定压热容给出：

\[
\left(\frac{\partial H}{\partial T}\right)_p=C_p
\]

对反应量作“产物计量和减反应物计量和”：

\[
\boxed{
\left(\frac{\mathrm d\Delta_\mathrm rH}{\mathrm dT}\right)_p
=\Delta_\mathrm rC_p
}
\]

其中：

\[
\Delta_\mathrm rC_p
=
\sum_\mathrm{products}\nu C_{p,m}
-
\sum_\mathrm{reactants}\nu C_{p,m}
\]

从\(T_1\)积分到\(T_2\)：

\[
\boxed{
\Delta_\mathrm rH(T_2)
=
\Delta_\mathrm rH(T_1)
+
\int_{T_1}^{T_2}\Delta_\mathrm rC_p\,\mathrm dT
}
\]

若\(\Delta_\mathrm rC_p\)在温区内近似恒定：

\[
\Delta_\mathrm rH(T_2)
\approx
\Delta_\mathrm rH(T_1)
+
\Delta_\mathrm rC_p(T_2-T_1)
\]

---

## 5. 反应熵随温度变化

由：

\[
\left(\frac{\partial S}{\partial T}\right)_p
=\frac{C_p}{T}
\]

可得：

\[
\boxed{
\Delta_\mathrm rS(T_2)
=
\Delta_\mathrm rS(T_1)
+
\int_{T_1}^{T_2}
\frac{\Delta_\mathrm rC_p}{T}\,\mathrm dT
}
\]

若\(\Delta_\mathrm rC_p\)近似恒定：

\[
\boxed{
\Delta_\mathrm rS(T_2)
\approx
\Delta_\mathrm rS(T_1)
+
\Delta_\mathrm rC_p
\ln\frac{T_2}{T_1}
}
\]

进而：

\[
\Delta_\mathrm rG(T_2)
=
\Delta_\mathrm rH(T_2)
-T_2\Delta_\mathrm rS(T_2)
\]

### 示例2：热容修正能否忽略

已知298.15 K时：

\[
\Delta_\mathrm rH=50.0\ \mathrm{kJ\,mol^{-1}}
\]

\[
\Delta_\mathrm rS=0.100\ \mathrm{kJ\,mol^{-1}\,K^{-1}}
\]

并近似取：

\[
\Delta_\mathrm rC_p=0.0200\ \mathrm{kJ\,mol^{-1}\,K^{-1}}
\]

求500 K时各量：

\[
\Delta_\mathrm rH(500)
=50.0+0.0200(500-298.15)
=54.0\ \mathrm{kJ\,mol^{-1}}
\]

\[
\Delta_\mathrm rS(500)
=0.100+0.0200\ln\frac{500}{298.15}
\approx0.110\ \mathrm{kJ\,mol^{-1}\,K^{-1}}
\]

\[
\Delta_\mathrm rG(500)
\approx54.0-500(0.110)
\approx-1.13\ \mathrm{kJ\,mol^{-1}}
\]

若完全忽略热容修正，会得到\(50.0-500(0.100)=0\)。在接近变号点时，看似不大的
热容修正就可能改变符号，因此尤其不能忽略数据不确定度。

---

## 6. 跨越相变必须分段

若从\(T_1\)到\(T_2\)途中某物质发生熔化、汽化或晶型转变，不能把单一相的
\(C_p\)公式直接跨过相变点。

以加热固体并熔化为例，熵变应分为：

\[
\Delta S
=
\int_{T_1}^{T_m}\frac{C_{p,s}}{T}\,\mathrm dT
+
\frac{\Delta H_\mathrm{fus}}{T_m}
+
\int_{T_m}^{T_2}\frac{C_{p,l}}{T}\,\mathrm dT
\]

反应中若多个物种跨越相变，还要分别加入相变焓和相变熵。所谓“高温数据外推”只有在
物态与模型边界均检查后才有意义。

### 即时检查2

为什么不能只用298 K的液态水热容，把水从250 K一直积分到400 K？

<details markdown="1">
<summary>答案</summary>

该路径跨越固—液和液—气相区，单一液相热容既不适用于所有温区，也漏掉相变潜热与
相变熵；还需说明压力，因为沸点随压力改变。

</details>

---

## 7. 反应耦合的热力学账本

状态函数具有可加性。若过程A和B按相同反应进度真正耦合：

\[
\Delta G_\mathrm{total}
=
\Delta G_A+\Delta G_B
\]

即使：

\[
\Delta G_A>0
\]

只要：

\[
\Delta G_B<0
\quad\text{且}\quad
|\Delta G_B|>\Delta G_A
\]

便有：

\[
\Delta G_\mathrm{total}<0
\]

整体过程热力学有利。必须像Hess定律一样先配平反应式；若某反应乘以系数\(n\)，其
\(\Delta G\)也乘以\(n\)。

### 示例3：用氧化过程驱动金属氧化物还原

将概念反应写为：

\[
\ce{MO(s)->M(s) + 1/2O2(g)}
\qquad
\Delta G_A>0
\]

\[
\ce{R(s) + 1/2O2(g)->RO(s)}
\qquad
\Delta G_B<0
\]

相加并消去\(\ce{O2}\)：

\[
\ce{MO(s)+R(s)->M(s)+RO(s)}
\]

\[
\Delta G_\mathrm{total}
=\Delta G_A+\Delta G_B
\]

还原剂R被氧化释放的自由能可以补偿金属氧化物分解的不利自由能。这是冶金还原的
基本热力学结构，但真实可行性还取决于相接触、传质、产物相态和反应动力学。

### 示例4：计量系数不能省略

若A过程每次需要\(40\ \mathrm{kJ\,mol^{-1}}\)，B过程每次释放
\(25\ \mathrm{kJ\,mol^{-1}}\)，一次B不足以驱动一次A：

\[
\Delta G_\mathrm{total}=40-25=+15\ \mathrm{kJ\,mol^{-1}}
\]

若物理机制允许两次B与一次A严格耦合：

\[
\Delta G_\mathrm{total}=40+2(-25)=-10\ \mathrm{kJ\,mol^{-1}}
\]

整体才成为热力学有利。

---

## 8. 能相加不等于已经耦合

在纸面上可把任意两个配平反应式相加，但实验中的耦合还要求过程之间存在通道，例如：

- 共享并及时消耗中间体；
- 通过膜、离子梯度或电子传递连接；
- 通过机械、电学或光学装置传递功；
- 产物移除直接改变另一个过程的组成。

若两个反应互不接触、没有共同中间体，也没有能量传递装置，一个反应的负
\(\Delta G\)不会神秘地“支付”另一个反应的正\(\Delta G\)。

> 热力学相加证明的是组合路径的账本；物理耦合机制决定这条组合路径是否真实存在。

---

## 9. 外加功可以驱动不利过程

电解、光化学和机械分离都可能使所考察体系沿\(\Delta G>0\)方向变化。这里没有违反
第二定律，因为外界向体系输入了功或高品质能量。

若体系在恒温恒压下需要最少非膨胀功：

\[
w_{\mathrm{non\text{-}PV,min,on}
\ge\Delta G
\]

可逆极限取等号；真实不可逆装置需要更多输入。若只计算反应体系而漏掉电源、光源或
机械装置，就会错误地把局部Gibbs能升高解释为第二定律例外。

整体判断仍应包含：

\[
\Delta S_\mathrm{univ}\ge0
\]

---

## 10. 稳定、亚稳与动力学持久

“稳定”至少有三种常被混用的含义：

| 表述 | 实际含义 |
|---|---|
| 热力学稳定 | 在给定约束下处于较低或最低Gibbs能状态 |
| 亚稳 | 位于局部极小值，存在更低状态但被势垒隔开 |
| 动力学持久 | 在观察时间内转化极慢 |

金刚石在常温常压下可长期存在，是理解后两者的经典例子：可观察到的持久不自动证明它
是全局热力学最低态。晶型、过冷液体、过饱和溶液和某些配合物也常需要同时讨论
热力学与动力学。

---

## 11. 一次可靠热力学判断的检查表

### 11.1 反应与系统

- 方程式是否配平，物态是否写出？
- \(\Delta_\mathrm rX\)是按哪一个反应进度定义？
- 系统是开放、封闭还是接受外部功？

### 11.2 状态与标准

- 温度、压力、组成和相态是否给出？
- 使用的是\(\Delta G^\circ\)还是当前组成的\(\Delta G\)？
- 标准态是否被误写成“室温条件”或“实际浓度”？

### 11.3 数据与近似

- \(\Delta H\)与\(\Delta S\)单位是否一致？
- 温区是否大到需要\(\Delta C_p\)修正？
- 是否跨越相变？
- 纯相、理想气体或理想溶液假设是否合理？
- 结果是否接近0，以至于数据误差可改变符号？

### 11.4 结论边界

- 负\(\Delta G\)只说明方向，是否误写成“快速”？
- 是否把“平衡有利”误写成“完全反应”？
- 是否把标准态变号温度误写成固定实验温度？
- 若声称耦合，是否指出了真实连接机制？

---

## 12. 热力学能回答什么

在条件和数据明确时，本章方法能够回答：

- 能量与热效应怎样按初终态记账；
- 恒温恒压下哪一方向可降低Gibbs能；
- 某温区中焓项还是熵项更占优势；
- 若过程耦合，整体自由能账本是否有利；
- 可逆过程中有用功的理论上限；
- 相平衡或化学平衡满足怎样的自由能条件。

---

## 13. 热力学暂时不能单独回答什么

本章方法不能仅凭\(\Delta G^\circ\)给出：

- 任意实际混合物此刻的方向；
- 平衡时各物种的具体含量；
- 达到平衡需要多久；
- 反应经历哪些基元步骤；
- 催化剂如何改变势垒；
- 复杂真实溶液的活度系数；
- 开放、带电、表面或受场体系的全部行为。

第7章已依次建立反应速率、机理、反应商和平衡常数。本章与第7章的接口是：

```text
本章：状态函数与方向判据
第7章：路径速率 + 组成依赖 + 平衡位置
```

---

## 14. 常见错误

### 错误1：只要升温，所有反应都更自发

升温增加\(T\Delta S\)的权重；它帮助\(\Delta S>0\)的反应，却不利于
\(\Delta S<0\)的反应。

### 错误2：\(T_*=\Delta H/\Delta S\)永远给真实转变温度

该式通常使用常量近似，且结果依赖所讨论的标准态或实际组成。相变、热容和气体分压
都可能改变结果。

### 错误3：负反应和正反应写在同一页就算耦合

必须有配平的计量关系和真实的物理连接机制。

### 错误4：电解反应\(\Delta G>0\)，所以不可能发生

外界电源做功可以驱动体系Gibbs能升高；应检查包括电源在内的总过程。

### 错误5：热力学稳定等于永远不反应

实际寿命受动力学势垒控制；亚稳态可长期存在。

### 错误6：算得\(-0.2\ \mathrm{kJ\,mol^{-1}}\)就能下强结论

接近零时，热容近似、数据精度、非理想性和相态误判都可能改变符号，应报告不确定性和
边界。

---

## 15. 分层练习

### 基础层

1. 某反应\(\Delta H<0,\Delta S<0\)。在常量近似下，低温还是高温较有利？
2. 某反应\(\Delta H^\circ=+45.0\ \mathrm{kJ\,mol^{-1}}\)，
   \(\Delta S^\circ=+90.0\ \mathrm{J\,mol^{-1}\,K^{-1}}\)。求\(T_*\)。
3. 若\(\Delta H>0,\Delta S<0\)，正温度区是否存在由
   \(T_*=\Delta H/\Delta S\)给出的变号点？
4. 写出Kirchhoff关系。

### 应用层

5. 已知298 K时\(\Delta H=30.0\ \mathrm{kJ\,mol^{-1}}\)，
   \(\Delta S=80.0\ \mathrm{J\,mol^{-1}\,K^{-1}}\)。忽略热容变化，判断350 K和
   450 K时\(\Delta G\)的符号。
6. 某反应在300 K时\(\Delta H=20.0\ \mathrm{kJ\,mol^{-1}}\)，
   \(\Delta S=50.0\ \mathrm{J\,mol^{-1}\,K^{-1}}\)，且
   \(\Delta C_p=10.0\ \mathrm{J\,mol^{-1}\,K^{-1}}\)近似恒定。写出400 K时
   \(\Delta H\)与\(\Delta S\)的修正式。
7. A过程\(\Delta G_A=+55\ \mathrm{kJ\,mol^{-1}}\)，B过程
   \(\Delta G_B=-30\ \mathrm{kJ\,mol^{-1}}\)。最少需要几次B与一次A耦合，才使
   总\(\Delta G<0\)？
8. 说明为什么低\(\ce{CO2}\)分压可能促进\(\ce{CaCO3}\)分解，但不要使用尚未
   学习的定量平衡式。

### 综合层

9. 某学生说：“两反应的\(\Delta G\)相加为负，所以把两瓶溶液放在同一实验室就能
   驱动正\(\Delta G\)反应。”指出错误。
10. 为什么跨越熔点计算熵变时必须加入\(\Delta H_\mathrm{fus}/T_m\)？
11. 电解水时反应体系的\(\Delta G>0\)。从系统边界解释为什么仍可发生。
12. 一项估算得到\(T_*=900\ \mathrm K\)。列出至少四项必须补充的信息，才能把它
    与实验转变温度比较。

---

## 16. 完整答案

### 练习1

<details markdown="1">
<summary>完整答案</summary>

\(\Delta G=\Delta H-T\Delta S=-|\Delta H|+T|\Delta S|\)。低温时熵惩罚较小，因此
低温较有利。

</details>

### 练习2

<details markdown="1">
<summary>完整答案</summary>

\[
T_*=\frac{45.0}{0.0900}=500\ \mathrm K
\]

</details>

### 练习3

<details markdown="1">
<summary>完整答案</summary>

没有。比值为负，而绝对温度为正；在符号与常量近似保持时，\(\Delta G>0\)。

</details>

### 练习4

<details markdown="1">
<summary>完整答案</summary>

\[
\left(\frac{\mathrm d\Delta_\mathrm rH}{\mathrm dT}\right)_p
=\Delta_\mathrm rC_p
\]

积分形式为：

\[
\Delta_\mathrm rH(T_2)
=\Delta_\mathrm rH(T_1)
+
\int_{T_1}^{T_2}\Delta_\mathrm rC_p\,\mathrm dT
\]

</details>

### 练习5

<details markdown="1">
<summary>完整答案</summary>

先换算\(\Delta S=0.0800\ \mathrm{kJ\,mol^{-1}\,K^{-1}}\)。

\[
\Delta G(350)=30.0-350(0.0800)=+2.0\ \mathrm{kJ\,mol^{-1}}
\]

\[
\Delta G(450)=30.0-450(0.0800)=-6.0\ \mathrm{kJ\,mol^{-1}}
\]

故350 K时正向不利，450 K时正向有利。

</details>

### 练习6

<details markdown="1">
<summary>完整答案</summary>

\[
\Delta H(400)
=20.0+0.0100(400-300)
=21.0\ \mathrm{kJ\,mol^{-1}}
\]

\[
\Delta S(400)
=0.0500+0.0100\ln\frac{400}{300}
\ \mathrm{kJ\,mol^{-1}\,K^{-1}}
\]

\[
\Delta S(400)\approx0.0529\ \mathrm{kJ\,mol^{-1}\,K^{-1}}
\]

</details>

### 练习7

<details markdown="1">
<summary>完整答案</summary>

一次B：

\[
55-30=+25\ \mathrm{kJ\,mol^{-1}}
\]

两次B：

\[
55+2(-30)=-5\ \mathrm{kJ\,mol^{-1}}
\]

因此最少两次，但还必须存在允许该计量关系的真实耦合机制。

</details>

### 练习8

<details markdown="1">
<summary>完整答案</summary>

分解产生\(\ce{CO2}\)。及时移走产物可减弱产物积累对继续正向分解的抵抗，使体系更
倾向补充被移走的\(\ce{CO2}\)。定量关系见
[7.5](../07-kinetics-equilibrium/07-05-reaction-quotient-gibbs-shift.md)的反应商与
平衡常数。

</details>

### 练习9

<details markdown="1">
<summary>完整答案</summary>

反应式和\(\Delta G\)在数学上可加，只证明假设组合路径的状态函数账本。两瓶彼此隔离
时没有共同中间体、物质通道或功传递，负\(\Delta G\)过程不能驱动另一瓶中的反应。

</details>

### 练习10

<details markdown="1">
<summary>完整答案</summary>

平衡熔化在熔点吸收相变焓，并产生：

\[
\Delta S_\mathrm{fus}
=\frac{\Delta H_\mathrm{fus}}{T_m}
\]

只积分固相和液相显热会漏掉相变本身的熵变。

</details>

### 练习11

<details markdown="1">
<summary>完整答案</summary>

若只把水和产物作为体系，它的Gibbs能可以升高；电源对体系输入电功。把电源及其能量
变化纳入更大边界后，总过程仍满足第二定律。可逆极限所需非膨胀输入功至少为体系的
\(\Delta G\)。

</details>

### 练习12

<details markdown="1">
<summary>完整答案</summary>

至少应补充：

1. 反应式及各物种相态；
2. \(\Delta H,\Delta S\)对应的温度和标准态；
3. 实验压力、气体分压或溶液组成；
4. 是否考虑\(\Delta C_p\)随温度的修正；
5. 温区内是否发生相变；
6. 活度与非理想性假设；
7. 数据不确定度；
8. 实验观察是否受动力学限制。

</details>

---

## 17. 本课小结

1. 温度通过\(-T\Delta S\)改变焓—熵竞争，不会使所有反应都更有利。
2. 在\(\Delta H,\Delta S\)近似恒定时，变号温度为
   \(T_*=\Delta H/\Delta S\)。
3. 只有\(\Delta H,\Delta S\)同号时，常量近似才给出正的变号温度。
4. \(\Delta H<0,\Delta S<0\)低温较有利；
   \(\Delta H>0,\Delta S>0\)高温较有利。
5. 标准态变号温度不等于与组成和压力无关的固定实验温度。
6. Kirchhoff关系为
   \(\mathrm d\Delta_\mathrm rH/\mathrm dT=\Delta_\mathrm rC_p\)。
7. 反应熵的温度修正包含
   \(\int\Delta_\mathrm rC_p/T\,\mathrm dT\)。
8. 跨越相变时必须分段积分并加入相变焓和相变熵。
9. 耦合过程的Gibbs能可按配平反应式相加。
10. 数学相加不等于物理耦合；还要有中间体、物质或功的传递通道。
11. 外界输入电功、光能或机械功可驱动体系沿\(\Delta G>0\)方向变化。
12. 亚稳态可因动力学势垒而长期存在。
13. \(\Delta G\)给方向而非速率，也不单独给平衡组成。
14. 热力学结论必须同时报告状态、近似、数据和系统边界。

---

## 18. 本章之后

本章已经建立状态函数、能量账本和方向判据。第7章接续回答本章刻意留下的两个问题：

> 反应沿什么路径、以多快速度进行？当组成改变时，实际
> \(\Delta_\mathrm rG\)怎样变化，并最终停在怎样的平衡组成？

---

## 19. 术语与资料来源

本页热容、温度修正和Gibbs能边界依据IUPAC资料核对，访问日期为2026-07-24：

- [IUPAC Gold Book：heat capacity](https://goldbook.iupac.org/terms/view/H02753)
- [IUPAC Gold Book：Kirchhoff equation](https://goldbook.iupac.org/terms/view/K03405)
- [IUPAC Green Book：热力学量、符号与单位](https://publications.iupac.org/books/gbook/green_book_2ed.pdf)
- [IUPAC：Gibbs能、自然变量与平衡](https://publications.iupac.org/pac/73/8/1349/)

进一步参考：

- Peter Atkins, Julio de Paula, *Physical Chemistry*, temperature dependence
  of reaction thermodynamics.
- Herbert B. Callen, *Thermodynamics and an Introduction to
  Thermostatistics*, equilibrium criteria and thermodynamic potentials.
