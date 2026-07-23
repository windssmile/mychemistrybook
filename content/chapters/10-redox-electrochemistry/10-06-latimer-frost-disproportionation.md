---
title: "10.6 Latimer图、Frost图与歧化"
chapter: 10
unit: 10.6
status: draft-v0.1
estimated_study_time: "150–195分钟"
level: core
---

# 10.6 Latimer图、Frost图与歧化

## 本课要解决的问题

同一元素有多个氧化态时，怎样把大量相邻电势压缩成可读图式？两个相邻还原电势怎样
判断中间氧化态的歧化趋势？为什么跨越多电子步骤时必须按电子数加权，不能直接相加
电势？Frost图的纵坐标怎样联系相对Gibbs能？一个点位于相邻两点连线上方或下方分别
意味着什么？

本课建立：

\[
\boxed{
E^\circ_\mathrm{overall}
=\frac{\sum_i n_iE_i^\circ}{\sum_i n_i}
}
\]

以及对三个相邻氧化态：

\[
\boxed{
E^\circ_\mathrm{disprop}
=E^\circ_\mathrm{right}-E^\circ_\mathrm{left}
}
\]

---

## 学习目标

完成本课后，你应该能够：

1. 读取基础Latimer图中的氧化态顺序和相邻还原电势；
2. 说明Latimer图必须注明介质和物种；
3. 由相邻步骤电子数计算跨步标准电势；
4. 避免直接相加电势；
5. 由左右相邻电势判断歧化趋势；
6. 判断反向归中趋势；
7. 写出满足电子守恒的歧化计量；
8. 构造基础Frost图坐标；
9. 解释\(nE^\circ\)与相对标准Gibbs能的关系；
10. 由两点连线斜率读取还原电势；
11. 用点在线上方或下方判断歧化/归中趋势；
12. 识别Frost图最低点结论的条件；
13. 说明pH、配位和沉淀会改变图示物种和电势；
14. 区分热力学趋势与实际反应速率。

---

## 学习本课之前

- [10.1](./10-01-oxidation-state-half-reaction-balancing.md)：歧化与电子计量；
- [10.3](./10-03-potential-gibbs-equilibrium.md)：电势的电子数加权；
- [10.4](./10-04-nernst-nonstandard.md)：pH和副反应对电势的影响；
- [6.5](../06-thermochemistry-thermodynamics/06-05-gibbs-spontaneity.md)：
  相对Gibbs能与稳定性。

### 3分钟诊断

1. 两个连续一电子还原电势为0.60 V和0.20 V，总二电子电势是多少？
2. 中间态歧化时，它的一部分被氧化，另一部分发生什么？
3. \(K\gg1\)的歧化反应是否一定很快？
4. 酸性介质的Latimer图能否不加检查直接用于强碱性溶液？

<details markdown="1">
<summary>查看诊断答案</summary>

1. 0.40 V；
2. 被还原；
3. 不一定；
4. 不能，pH会改变物种、反应商和电势。

</details>

---

## 1. Latimer图是什么

Latimer图把同一元素的物种按氧化态从高到低排列，并在相邻箭头上标出按还原方向的
标准或条件电势：

\[
\ce{
A^{(+2)}
->[E_1^\circ]
B^{(+1)}
->[E_2^\circ]
C^{(0)}
}
\]

含义是：

\[
\ce{A+e-<=>B}
\qquad E_1^\circ
\]

\[
\ce{B+e-<=>C}
\qquad E_2^\circ
\]

实际图必须同时注明：

- 酸性、碱性或指定pH；
- 代表每个氧化态的具体化学物种；
- 温度与标准/条件状态；
- 是否包含气体、沉淀或配位物种。

只写元素符号和氧化数而不说明物种，可能掩盖酸碱与配位差异。

---

## 2. 跨步电势必须按电子数加权

每一步：

\[
\Delta G_i^\circ=-n_iFE_i^\circ
\]

总Gibbs能：

\[
\Delta G_\mathrm{overall}^\circ
=-\sum_i n_iFE_i^\circ
\]

总电子数：

\[
n_\mathrm{overall}=\sum_i n_i
\]

所以：

\[
\boxed{
E_\mathrm{overall}^\circ
=\frac{\sum_i n_iE_i^\circ}{\sum_i n_i}
}
\]

这是电子数加权平均，不是简单算术平均的无条件规则。只有各步电子数相同，算术平均才
恰好成立。

---

## 3. 跨步示例

\[
\ce{
A^{(+3)}
->[0.50\ V]
B^{(+2)}
->[0.20\ V]
C^{(0)}
}
\]

第一步转移1电子，第二步从+2到0转移2电子：

\[
E^\circ_{\ce{A/C}}
=\frac{(1)(0.50)+(2)(0.20)}{1+2}
\]

\[
\boxed{E^\circ_{\ce{A/C}}=0.300\ \mathrm V}
\]

若直接求\((0.50+0.20)/2=0.35\) V，就忽略了第二步的两电子权重。

---

## 4. 中间态的歧化判据

考虑：

\[
\ce{
A
->[E_\mathrm{left}^\circ]
B
->[E_\mathrm{right}^\circ]
C
}
\]

其中氧化态从左到右降低。B歧化时：

- 一部分B反向变为A，氧化电势为
  \(-E_\mathrm{left}^\circ\)；
- 另一部分B正向还原为C，还原电势为
  \(E_\mathrm{right}^\circ\)。

所以：

\[
\boxed{
E_\mathrm{disprop}^\circ
=E_\mathrm{right}^\circ-E_\mathrm{left}^\circ
}
\]

- 若\(E_\mathrm{right}^\circ>E_\mathrm{left}^\circ\)，标准歧化热力学有利；
- 若\(E_\mathrm{right}^\circ<E_\mathrm{left}^\circ\)，反向归中更有利；
- 相等时，标准驱动力为0。

---

## 5. 歧化计量不能只写“2B”

若A、B、C相邻且每步各相差1个电子：

\[
\ce{2B<=>A+C}
\]

若氧化态间隔不同，系数需由电子守恒决定。例如B为+2，A为+5，C为0：

- 每个B氧化到A失3电子；
- 每个B还原到C得2电子。

最小电子公倍数为6：

\[
\boxed{\ce{5B^{(+2)}<=>2A^{(+5)}+3C^{(0)}}}
\]

这里只表达目标元素的氧化态计量；真实水溶液反应还要配平O、H和电荷。

---

## 6. 代表性歧化示例

\[
\ce{
A^{(+2)}
->[0.20\ V]
B^{(+1)}
->[0.80\ V]
C^{(0)}
}
\]

\[
E^\circ_\mathrm{disprop}
=0.80-0.20
=+0.60\ \mathrm V
\]

\[
\boxed{\ce{2B^{(+1)}->A^{(+2)}+C^{(0)}}\text{标准条件下有利}}
\]

其标准平衡常数可由10.3方法计算。但“有利”仍不保证快速，也不保证B在任何浓度、
pH或配体条件下都无法存在。

---

## 7. Frost图的坐标

Frost图通常以：

- 横坐标：元素氧化态\(N\)；
- 纵坐标：\(nE^\circ\)

表示各氧化态相对于选定参考态的相对标准Gibbs能尺度。

若参考态取元素氧化态0，并把某氧化态还原到0写为：

\[
\ce{X(N)+Ne-<=>X(0)}
\]

则：

\[
\Delta G^\circ_{\mathrm{reduction}}=-NFE^\circ
\]

因此该氧化态相对参考态的标准Gibbs能为：

\[
G^\circ_{X(N)}-G^\circ_{X(0)}
=NFE^\circ
\]

\[
\boxed{
y=NE^\circ
=\frac{G^\circ_{X(N)}-G^\circ_{X(0)}}F
}
\]

所以纵坐标可看作以\(F\)缩放的相对标准Gibbs能。不同教材可能采用不同符号或参考态，
读图前必须确认坐标定义。

---

## 8. 从Latimer图构造Frost点

仍用：

\[
\ce{
A^{(+2)}
->[0.20]
B^{(+1)}
->[0.80]
C^{(0)}
}
\]

取C为零点：

\[
(N_C,y_C)=(0,0)
\]

B到C为一电子、0.80 V：

\[
(N_B,y_B)=(1,0.80)
\]

A到C总二电子电势：

\[
E^\circ_{\ce{A/C}}
=\frac{0.20+0.80}{2}=0.50\ \mathrm V
\]

\[
(N_A,y_A)=(2,2\times0.50)=(2,1.00)
\]

A和C连线在\(N=1\)处的高度为0.50，而B点为0.80，位于连线上方。

---

## 9. Frost图怎样判断歧化

对中间氧化态B：

- **B点高于相邻两点连线：** B相对自由能较高，向两侧歧化有利；
- **B点低于相邻两点连线：** 两侧物种向B归中有利；
- **B点在线上：** 对该组合的标准驱动力为0。

这与Latimer判据完全一致。上例B在线上方，对应：

\[
E_\mathrm{right}^\circ-E_\mathrm{left}^\circ
=0.80-0.20>0
\]

Frost图把多个氧化态的相对趋势可视化，但不会替代具体反应的配平和反应商。

---

## 10. 斜率就是相邻还原电势

两个点从较高氧化态\(N_h\)到较低氧化态\(N_l\)：

\[
\boxed{
E^\circ_{\mathrm{reduction}}
=
\frac{y_h-y_l}{N_h-N_l}
}
\]

因此：

- 斜率数值对应两态间标准还原电势；
- 点的高度反映相对标准Gibbs能；
- 线段几何必须与电子数和反应方向一起解释。

不要只看“向右上还是右下”而忽略横坐标是氧化态。

---

## 11. 最低点意味着什么

在同一介质、相同标准或条件约定下，较低点代表相对于图中其他态较低的标准Gibbs能。
它常提示较稳定的氧化态，但不能无条件解释为：

- 在任何初始组成下含量最大；
- 对所有反应物都惰性；
- 动力学上永远不反应；
- 跨不同pH或不同配体体系仍是同一最低点；
- 固相、气相和溶液态可不加标准态校正直接比较。

稳定性必须说明相、物种、介质和参照。

---

## 12. pH与配位会重画图

若半反应含\(\ce{H+}\)：

\[
E=E^\circ-\frac{0.05916m}{n}\mathrm{pH}+\cdots
\]

pH改变会以不同斜率移动不同氧化态之间的条件电势。与此同时：

- 酸碱形态可能切换；
- 氧化物或氢氧化物可能沉淀；
- 配体可能选择性稳定某一氧化态；
- 气体分压与固相活度可能改变。

因此酸性Latimer/Frost图不能直接移用于碱性介质。配位效应应结合
[11.3](../11-coordination-chemistry/11-03-formation-constants-chelation.md)的形成常数
和[11.4](../11-coordination-chemistry/11-04-hsab-selectivity.md)的受约束选择性语言，
重新确定各氧化态的实际主导物种与条件电势；不能只在原图旁写一个配体名称而保留原
坐标不变。

---

## 13. 可靠读图流程

```text
Latimer图
1. 确认介质、温度、物种与箭头方向
2. 标出每步电子数
3. 跨步电势用nE加权
4. 中间态歧化用E右-E左
5. 写真实半反应并配平
6. 非标准条件再用Nernst方程

Frost图
1. 确认横纵坐标和参考态
2. 用斜率读取两态还原电势
3. 比较中间点与相邻连线
4. 上方判歧化趋势，下方判归中趋势
5. 检查pH、相、配位、沉淀与动力学
```

---

## 14. 常见错误

1. Latimer图氧化态顺序读反；
2. 跨步电势直接相加；
3. 不按电子数加权；
4. 歧化判据写成\(E_\mathrm{left}-E_\mathrm{right}\)；
5. 氧化态间隔不同时仍机械写\(\ce{2B->A+C}\)；
6. Frost纵坐标误当作单独电极电势；
7. 点在线上方却判断为归中；
8. 最低点解释为任何条件下绝对稳定；
9. 酸性图直接用于碱性；
10. 图示热力学趋势等同于反应快速。

---

## 15. 分层练习

1. 两个连续一电子电势为0.70 V和0.30 V，求总二电子电势。
2. 第一步1电子、0.80 V，第二步2电子、0.20 V，求跨步电势。
3. Latimer片段\(A\xrightarrow{0.25}B\xrightarrow{0.65}C\)，判断B歧化。
4. 若上题两个电势互换，哪一方向有利？
5. B为+3，A为+5，C为0，配平只含目标元素的歧化计量。
6. Frost图中B点位于A、C连线上方，说明什么？
7. B点位于连线下方，A与C混合时哪一方向有利？
8. 某点坐标为\((+3,1.50)\)，参考态为0，求该态到0的三电子标准还原电势。
9. 两点\((+4,2.0)\)和\((+2,0.6)\)，求+4到+2的标准还原电势。
10. 为什么Frost图纵坐标不能简单标成\(E^\circ\)？
11. 为什么改变pH可能改变歧化判断？
12. \(E^\circ_\mathrm{disprop}>0\)但反应长期不明显，给出两个原因。

---

## 16. 完整答案

<details markdown="1">
<summary>查看1—6题答案</summary>

1. \(E=(0.70+0.30)/2=0.50\) V。
2. \(E=[(1)(0.80)+(2)(0.20)]/3=0.400\) V。
3. \(E_\mathrm{disprop}=0.65-0.25=+0.40\) V，B标准歧化有利。
4. \(E_\mathrm{disprop}=0.25-0.65=-0.40\) V，反向归中有利。
5. B(+3)氧化到A(+5)每个失2电子，还原到C(0)每个得3电子：
   \(\ce{5B^{(+3)}->3A^{(+5)}+2C^{(0)}}\)。
6. B相对两侧组合的标准Gibbs能较高，歧化趋势有利。

</details>

<details markdown="1">
<summary>查看7—12题答案</summary>

7. A与C向B归中有利。
8. \(E=1.50/3=0.500\) V。
9. \(E=(2.0-0.6)/(4-2)=0.70\) V。
10. 纵坐标是\(nE^\circ\)，即相对Gibbs能除以\(F\)的尺度；电子数不同不能省略。
11. 各半反应消耗质子数不同，Nernst pH斜率不同，且主导酸碱/固相物种可能切换。
12. 高活化势垒、电子转移慢、钝化、传质受限或成核困难等任二项。

</details>

---

## 17. 本课小结

1. Latimer图按氧化态从高到低列出相邻还原电势。
2. 图必须注明具体物种、介质和条件。
3. 跨步电势由\(\sum nE/\sum n\)计算。
4. 电势不能无条件直接相加。
5. 中间态歧化电势为\(E_\mathrm{right}-E_\mathrm{left}\)。
6. 右侧电势更大时，标准歧化有利。
7. 左侧电势更大时，反向归中有利。
8. 氧化态间隔不同必须按电子守恒配歧化系数。
9. Frost图常以氧化态为横坐标、\(nE^\circ\)为纵坐标。
10. \(nE^\circ\)是相对标准Gibbs能除以\(F\)的尺度。
11. 两点连线斜率给相应标准还原电势。
12. 中间点在线上方提示歧化，下方提示归中。
13. 最低点结论依赖物种、相、介质和参考态。
14. 电势图给热力学趋势，不给反应速率。

---

## 18. 全章收束

第10章把电子转移统一为：

\[
\boxed{
\text{氧化态与电子计量}
\rightarrow
\text{电极与电池}
\rightarrow
E,\Delta G,K
\rightarrow
\text{Nernst实际条件}
\rightarrow
\text{电解、腐蚀与多氧化态图}
}
\]

下一步完成本章知识地图、综合练习和章节测验，并回看第9章的沉淀耦合是否准确承接
自由离子活度对电势的影响。

---

## 19. 术语与资料来源

本页歧化、归中和氧化态图用语依据IUPAC资料核对，访问日期为2026-07-24：

- [IUPAC Gold Book：disproportionation](https://goldbook.iupac.org/terms/view/D01799)
- [IUPAC Gold Book：comproportionation](https://goldbook.iupac.org/terms/view/C01217)
- [IUPAC Gold Book：oxidation state](https://goldbook.iupac.org/terms/view/O04365)
- [IUPAC Recommendations 2016：Comprehensive definition of oxidation state](https://doi.org/10.1515/pac-2015-1204)

进一步参考：

- Peter Atkins et al., *Shriver & Atkins' Inorganic Chemistry*, redox stability
  diagrams.
- W. M. Latimer, *The Oxidation States of the Elements and Their Potentials in
  Aqueous Solutions*.
