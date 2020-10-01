---
description: GF Sticky Header will the stick header at top when content is being scrolled.
---

# GF Sticky Header

### GF Sticky Header Info

#### Usage

The simple code of a basic GFSticky Header is as shown below. Place

### GF Sticky Header Types

#### GF Sticky Header - Vertical

GF Sticky Header property _`direction: Axis.vertical`  align the stickyContent and content in vertical  way._ 

#### GF Sticky Header - Horizontal

GF Sticky Header property _`direction: Axis.horizontal`  align the stickyContent and content in horizontal  way._ 

### GF Sticky Header Builder

\[GFStickyHeaderBuilder\] component works same as GFStickyHeader, instead of widget for stickyHeader here we can use \[builder\].

### Custom Properties

Look and feel of the **GFStickyHeader** can be customized using the GFStickyHeader properties.

<table>
  <thead>
    <tr>
      <th style="text-align:left"></th>
      <th style="text-align:left"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>stickyContent</b>
      </td>
      <td style="text-align:left">widget can be used to define [stickyContent]</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>content</b>
      </td>
      <td style="text-align:left">widget can be used to define [content].</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>enableHeaderOverlap</b>
      </td>
      <td style="text-align:left">
        <p>On state true, the [stickyContent] will overlap the [content].</p>
        <p>Only works when direction is [Axis.vertical]. Default set to false.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>stickyContentPosition</b>
      </td>
      <td style="text-align:left">
        <p>[GFPosition] allows to [stickyContentPosition] to stick at top in [Axis.vertical]
          and stick at start in [Axis.horizontal]</p>
        <p>Defaults to [GFPosition.start]</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>callback</b>
      </td>
      <td style="text-align:left">Allows to add custom stickyHeader stuck offset value</td>
    </tr>
    <tr>
      <td style="text-align:left"><b>direction</b>
      </td>
      <td style="text-align:left">
        <p>[direction] allows children to align in vertical / horizontal way</p>
        <p>Defaults to [Axis.vertical]</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left"><b>stickyContentBuilder</b>
      </td>
      <td style="text-align:left">builder widget can be used to define [stickyContentBuilder].</td>
    </tr>
  </tbody>
</table>

