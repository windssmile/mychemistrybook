---
title: "10.3 电势、自由能与平衡常数"
chapter: 10
unit: 10.3
status: draft-v0.1
estimated_study_time: "120–165分钟"
level: core
---

# 10.3 电势、自由能与平衡常数

## 本课要解决的问题

为什么正电池电势对应负Gibbs能变化？电子数\(n\)为什么出现在能量换算中，却不应
拿来倍乘电势？怎样由标准电势计算平衡常数？反应反向或整体倍乘时，\(E^\circ\)、
\(\Delta_\mathrm rG^\circ\)和\(K\)分别怎样变换？为什么不能把几个电极电势像反应焓
那样任意相加？

本课建立：

\[
\boxed{
\Delta_\mathrm rG^\circ=-nFE^\circ_\mathrm{cell}
}
\]

\[
\boxed{
\Delta_\mathrm rG^\circ=-RT\ln K
}
\]

\[
\boxed{
\ln K=\frac{nFE^\circ_\mathrm{cell}}{RT}
}
\]

---

## 学习目标

完成本课后，你应该能够：

1. 解释电势是单位电荷的能量尺度；
2. 说明Faraday常数连接电子的物质的量与电荷；
3. 由\(E^\circ\)计算\(\Delta_\mathrm rG^\circ\)；
4. 由\(\Delta_\mathrm rG^\circ\)反算\(E^\circ\)；
5. 由\(E^\circ\)计算标准平衡常数；
6. 在25 °C使用常用对数简式并说明温度条件；
7. 正确确定配平总反应的电子数\(n\)；
8. 解释\(E^\circ>0,\Delta G^\circ<0,K>1\)的对应关系；
9. 处理反应反向时三个量的变化；
10. 处理反应倍乘时三个量的变化；
11. 说明电势不能按计量系数直接相加；
12. 用Gibbs能组合多步电化学反应；
13. 区分标准状态趋势与实际条件方向；
14. 区分热力学可行性和反应速率。

---

## 学习本课之前

- [10.2](./10-02-galvanic-cell-electrode-potential.md)：
  标准电池电势与还原电势表；
- [6.5](../06-thermochemistry-thermodynamics/06-05-gibbs-spontaneity.md)：
  \(\Delta G^\circ\)、\(\Delta G\)与自发方向；
- [7.4](../07-kinetics-equilibrium/07-04-dynamic-equilibrium-activity-constant.md)：
  \(\Delta G^\circ=-RT\ln K\)；
- [10.1](./10-01-oxidation-state-half-reaction-balancing.md)：
  电子计量。

### 3分钟诊断

1. \(1\ \mathrm V\)等于每库仑多少焦耳？
2. 总反应转移2 mol电子时，\(n\)是多少？
3. 反应整体乘以2，\(E^\circ\)是否乘以2？
4. \(E^\circ_\mathrm{cell}>0\)时，标准反应的\(K\)大于还是小于1？

<details markdown="1">
<summary>查看诊断答案</summary>

1. \(1\ \mathrm{J\,C^{-1}}\)；
2. 2；
3. 不乘；
4. 大于1。

</details>

---

## 1. 电势为何连接能量

电势差的单位：

\[
1\ \mathrm V=1\ \mathrm{J\,C^{-1}}
\]

若反应按所写计量转移\(n\) mol电子，电荷量的绝对值为：

\[
q=nF
\]

其中Faraday常数：

\[
F\approx96485\ \mathrm{C\,mol^{-1}}
\]

因此\(nFE\)的单位为：

\[
(\mathrm{mol\ e^-})
\left(\frac{\mathrm C}{\mathrm{mol\ e^-}}\right)
\left(\frac{\mathrm J}{\mathrm C}\right)
=\mathrm J
\]

它正好是按该配平方程式计的摩尔反应能量尺度。

---

## 2. 符号为什么相反

在恒温恒压、可逆电化学极限下，体系可对外输出的最大非体积功与Gibbs能降低相连：

\[
\boxed{
\Delta_\mathrm rG=-nFE_\mathrm{cell}
}
\]

标准状态：

\[
\boxed{
\Delta_\mathrm rG^\circ=-nFE^\circ_\mathrm{cell}
}
\]

所以：

| \(E^\circ_\mathrm{cell}\) | \(\Delta G^\circ\) | 标准状态下所写方向 |
|---:|---:|---|
| \(>0\) | \(<0\) | 热力学有利 |
| \(=0\) | \(=0\) | 标准组成恰对应\(K=1\) |
| \(<0\) | \(>0\) | 反向有利 |

这个符号约定以所写电池反应方向为准。

---

## 3. 电子数\(n\)从哪里来

\(n\)是配平总反应按当前计量书写时转移电子的物质的量数。

例如：

\[
\ce{Zn+Cu^{2+}->Zn^{2+}+Cu}
\]

两个半反应各转移2电子：

\[
\boxed{n=2}
\]

若把总反应整体乘以2：

\[
\ce{2Zn+2Cu^{2+}->2Zn^{2+}+2Cu}
\]

则新写法有\(n=4\)。与此同时\(\Delta G^\circ\)加倍，\(E^\circ\)不变。

不能把某个元素氧化态变化数直接当作\(n\)，除非已经乘上原子数并与另一半反应配平。

---

## 4. 标准电势到标准Gibbs能

对Zn—Cu电池：

\[
E^\circ_\mathrm{cell}=1.10\ \mathrm V
\]

\[
n=2
\]

\[
\Delta_\mathrm rG^\circ
=-(2)(96485)(1.10)
\]

\[
=-2.12\times10^5\ \mathrm{J\,mol^{-1}}
\]

\[
\boxed{
\Delta_\mathrm rG^\circ\approx-212\ \mathrm{kJ\,mol^{-1}}
}
\]

这里“每摩尔”指每摩尔**按所写总反应发生的反应进度单位**，不是每摩尔任意单一
物种。

---

## 5. 标准电势到平衡常数

由：

\[
\Delta_\mathrm rG^\circ=-nFE^\circ
\]

以及：

\[
\Delta_\mathrm rG^\circ=-RT\ln K
\]

得到：

\[
\boxed{
\ln K=\frac{nFE^\circ}{RT}
}
\]

或：

\[
\boxed{
\log_{10}K
=\frac{nFE^\circ}{2.303RT}
}
\]

在298.15 K：

\[
\boxed{
\log_{10}K
\approx\frac{nE^\circ}{0.05916\ \mathrm V}
}
\]

0.05916 V简式只适用于298.15 K附近；其他温度应回到\(2.303RT/F\)。

---

## 6. Zn—Cu平衡常数

\[
\log_{10}K
=\frac{(2)(1.10)}{0.05916}
=37.19
\]

\[
\boxed{K\approx1.6\times10^{37}}
\]

这说明标准反应的平衡强烈偏向\(\ce{Zn^{2+}+Cu}\)一侧。但它不表示：

- 所有非标准组成下正向都瞬间发生；
- 反应物严格全部耗尽；
- 电池能在负载下始终维持1.10 V；
- 不存在钝化、传质或副反应。

---

## 7. 三个量的变换规则

设原反应有\(E^\circ,\Delta G^\circ,K\)。

### 7.1 反应反向

\[
\boxed{
E^\circ_\mathrm{rev}=-E^\circ
}
\]

\[
\boxed{
\Delta G^\circ_\mathrm{rev}=-\Delta G^\circ
}
\]

\[
\boxed{
K_\mathrm{rev}=\frac1K
}
\]

### 7.2 反应乘以\(m\)

\[
\boxed{
E^\circ_\mathrm{new}=E^\circ
}
\]

\[
\boxed{
\Delta G^\circ_\mathrm{new}=m\Delta G^\circ
}
\]

\[
\boxed{
K_\mathrm{new}=K^m
}
\]

\[
\boxed{n_\mathrm{new}=mn}
\]

这些规则彼此相容：

\[
-n_\mathrm{new}FE^\circ
=-(mn)FE^\circ
=m\Delta G^\circ
\]

---

## 8. 为什么电势不能像焓一样直接相加

\(\Delta G^\circ\)是广度量，可按反应相加。电势是：

\[
E^\circ=-\frac{\Delta G^\circ}{nF}
\]

若组合多个步骤，应：

1. 把每步电势转为\(\Delta G_i^\circ=-n_iFE_i^\circ\)；
2. 按目标反应方向和倍数处理\(\Delta G_i^\circ\)；
3. 相加得到总\(\Delta G^\circ\)；
4. 用总电子数\(n_\mathrm{total}\)换回总\(E^\circ\)。

只有在特定电子数关系下，电势的简单差或加权形式才成立。把两个任意标准还原电势
直接相加没有普遍意义。

---

## 9. 一个组合示例

假设两个连续的一电子还原步骤：

\[
\ce{A+e-<=>B}
\qquad E_1^\circ=0.60\ \mathrm V
\]

\[
\ce{B+e-<=>C}
\qquad E_2^\circ=0.20\ \mathrm V
\]

总反应：

\[
\ce{A+2e-<=>C}
\]

每步：

\[
\Delta G_1^\circ=-F(0.60)
\]

\[
\Delta G_2^\circ=-F(0.20)
\]

总：

\[
\Delta G^\circ=-F(0.80)
\]

但总反应\(n=2\)：

\[
E^\circ_\mathrm{overall}
=-\frac{\Delta G^\circ}{2F}
\]

\[
\boxed{E^\circ_\mathrm{overall}=0.40\ \mathrm V}
\]

不是0.80 V。这个电子数加权思想将在10.6的Latimer图中再次使用。

---

## 10. 标准状态不等于实际状态

\[
\Delta_\mathrm rG^\circ=-nFE^\circ
\]

只描述标准状态反应。实际组成下：

\[
\Delta_\mathrm rG=-nFE
\]

即使\(E^\circ>0\)，产物活度很高、反应物活度很低时，实际\(E\)可能降到0或变负。
下一课由Nernst方程定量处理：

\[
E=E^\circ-\frac{RT}{nF}\ln Q
\]

---

## 11. 平衡时的电势

整体反应达到平衡：

\[
\Delta_\mathrm rG=0
\]

所以：

\[
\boxed{E_\mathrm{cell}=0}
\]

这不表示两个电极相对于某参比的电势都为0，而是两电极对整体反应给出的电势差为0。

标准电池电势\(E^\circ=0\)则只对应\(K=1\)，不要把实际平衡的\(E=0\)与标准量
\(E^\circ=0\)混为一谈。

---

## 12. 热力学仍不提供速率

很大的正\(E^\circ\)或很大的\(K\)表示标准热力学驱动力或平衡偏向，不能单独确定：

- 电极反应交换速率；
- 活化势垒；
- 钝化膜形成；
- 传质限制；
- 实际短路电流或功率。

电势表不是反应速率表。催化剂可改变达到平衡的速率，但不改变相同状态定义下的
\(E^\circ\)、\(\Delta G^\circ\)或\(K\)。

---

## 13. 常见错误

1. 忘记负号，写成\(\Delta G^\circ=nFE^\circ\)；
2. \(n\)取自未配平半反应；
3. 把伏特直接当焦耳，漏掉\(nF\)；
4. 使用0.05916 V简式却不说明298.15 K；
5. 反向反应时把\(K\)改符号而不是取倒数；
6. 倍乘反应时倍乘\(E^\circ\)；
7. 多步反应直接相加电势；
8. \(K\)很大就把反应物平衡量写成严格0；
9. 用标准电势判断所有非标准组成；
10. 把热力学有利写成反应必然快速。

---

## 14. 分层练习

1. 某反应\(n=1,E^\circ=0.500\) V，求\(\Delta G^\circ\)。
2. 某反应\(n=2,\Delta G^\circ=-150\ \mathrm{kJ\,mol^{-1}}\)，求\(E^\circ\)。
3. 298.15 K时\(n=1,E^\circ=0.05916\) V，求\(K\)。
4. 298.15 K时\(n=2,E^\circ=0.300\) V，求\(\log_{10}K\)。
5. 反应反向后，练习4的\(E^\circ\)和\(K\)怎样变？
6. 反应整体乘以3后，\(E^\circ,\Delta G^\circ,K,n\)怎样变？
7. 为什么半反应配平乘5时不能把电势也乘5？
8. 两个连续步骤均转移1电子，电势分别0.70 V和0.10 V，求二电子总还原电势。
9. 某标准电池\(E^\circ<0\)，怎样改写才能得到正标准电势？
10. 实际平衡时为何\(E=0\)，但两个单电极电势未必各为0？
11. \(K=10^{30}\)是否表示反应物平衡活度严格为0？
12. 为什么大正电势不能证明电池能输出大电流？

---

## 15. 完整答案

<details markdown="1">
<summary>查看1—6题答案</summary>

1. \(\Delta G^\circ=-(1)(96485)(0.500)
   =-48.2\ \mathrm{kJ\,mol^{-1}}\)。
2. \(E^\circ=-\Delta G^\circ/(nF)
   =150000/(2\times96485)=0.777\ \mathrm V\)。
3. \(\log K=nE^\circ/0.05916=1\)，故\(K=10\)。
4. \(\log K=(2)(0.300)/0.05916=10.14\)，
   \(K\approx1.4\times10^{10}\)。
5. \(E^\circ=-0.300\) V，\(K_\mathrm{rev}=1/K\)，即约
   \(7.2\times10^{-11}\)。
6. \(E^\circ\)不变，\(\Delta G^\circ\)乘3，\(K\)变为\(K^3\)，\(n\)乘3。

</details>

<details markdown="1">
<summary>查看7—12题答案</summary>

7. 电势是单位电荷能量尺度；倍乘只增加总电荷量和总Gibbs能。
8. \(\Delta G^\circ=-F(0.70)-F(0.10)=-0.80F\)，总\(n=2\)，
   故\(E^\circ=0.40\) V。
9. 把总反应反向，\(E^\circ\)改变符号。
10. \(E_\mathrm{cell}\)是两电极的电势差；差为0不要求各自相对参比的值为0。
11. 不表示严格为0；有限\(K\)对应有限但可能极小的平衡量，并受守恒约束。
12. 电流还取决于电极动力学、内阻、传质、面积和负载。

</details>

---

## 16. 本课小结

1. 电势是单位电荷的能量尺度，\(1\ \mathrm V=1\ \mathrm{J\,C^{-1}}\)。
2. \(F\)连接1 mol电子与电荷量。
3. \(n\)来自配平总反应的电子计量。
4. \(\Delta G^\circ=-nFE^\circ\)。
5. 正电势对应所写标准反应负Gibbs能变化。
6. \(\ln K=nFE^\circ/(RT)\)。
7. 298.15 K时\(\log K\approx nE^\circ/0.05916\ \mathrm V\)。
8. 反向时\(E^\circ,\Delta G^\circ\)变号，\(K\)取倒数。
9. 倍乘时\(E^\circ\)不变，\(\Delta G^\circ,n\)倍增，\(K\)取幂。
10. 多步电势应先转换为Gibbs能再组合。
11. 实际平衡时整体电池电势为0。
12. 标准电势为0只对应标准平衡常数为1。
13. 标准状态趋势不能替代实际组成判断。
14. 热力学电势不提供反应速率或功率。

---

## 17. 下一课

下一课把当前活度写进电势：

> Nernst方程怎样从\(\Delta G=\Delta G^\circ+RT\ln Q\)推出？浓度、分压和pH
> 如何改变电势？浓差电池为什么两侧物质相同仍能输出电压？

---

## 18. 术语与资料来源

本页标准电动势与热力学关系依据IUPAC资料核对，访问日期为2026-07-24：

- [IUPAC Gold Book：standard electromotive force](https://goldbook.iupac.org/terms/view/S05913)
- [IUPAC Gold Book：Faraday constant](https://goldbook.iupac.org/terms/view/F02325)
- [IUPAC Gold Book：Gibbs energy](https://goldbook.iupac.org/terms/view/G02629)
- [IUPAC Gold Book：equilibrium constant](https://goldbook.iupac.org/terms/view/E02177)

进一步参考：

- Peter Atkins and Julio de Paula, *Physical Chemistry*, electrochemical
  thermodynamics.
- IUPAC Green Book, *Quantities, Units and Symbols in Physical Chemistry*.
