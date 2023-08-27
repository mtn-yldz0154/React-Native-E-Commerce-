#pragma checksum "C:\Users\Metin Yıldız\OneDrive - klu.edu.tr\Masaüstü\Mobil E Ticaret\MobilE-Ticaret\Views\Admin\Products.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b74be4856275068aac3ac1bb9110b3637c01b522"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Admin_Products), @"mvc.1.0.view", @"/Views/Admin/Products.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\Metin Yıldız\OneDrive - klu.edu.tr\Masaüstü\Mobil E Ticaret\MobilE-Ticaret\Views\_ViewImports.cshtml"
using MobilE_Ticaret;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Metin Yıldız\OneDrive - klu.edu.tr\Masaüstü\Mobil E Ticaret\MobilE-Ticaret\Views\_ViewImports.cshtml"
using MobilE_Ticaret.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 1 "C:\Users\Metin Yıldız\OneDrive - klu.edu.tr\Masaüstü\Mobil E Ticaret\MobilE-Ticaret\Views\Admin\Products.cshtml"
using EntityLayer;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b74be4856275068aac3ac1bb9110b3637c01b522", @"/Views/Admin/Products.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0104cefbdf8288a87465c6c63b90535b2159260c", @"/Views/_ViewImports.cshtml")]
    #nullable restore
    public class Views_Admin_Products : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<Product>>
    #nullable disable
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 3 "C:\Users\Metin Yıldız\OneDrive - klu.edu.tr\Masaüstü\Mobil E Ticaret\MobilE-Ticaret\Views\Admin\Products.cshtml"
  
    ViewData["Title"] = "Products";
    Layout = "~/Views/Shared/_AdminLayout.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<div class="" container col-md-11"">
    <br />
    <h3>Ürünler</h3>
    <hr />
    <br />
    <a class=""btn btn-primary"" href=""/admin/addproduct"">Ürün Ekle</a>
    <br />


    <table class="" container col-md-12 table table-bordered table-striped table-hover table-dark"">
        <br />
        <thead>
            <tr>

                <th>Name</th>
                <th>Kategori</th>
                <th>Resim</th>
                <th>Detay</th>
                <th>Düzenle</th>
                <th>Sil</th>

            </tr>
        </thead>

        <tbody>


");
#nullable restore
#line 35 "C:\Users\Metin Yıldız\OneDrive - klu.edu.tr\Masaüstü\Mobil E Ticaret\MobilE-Ticaret\Views\Admin\Products.cshtml"
             foreach (var item in Model)
            {

#line default
#line hidden
#nullable disable
            WriteLiteral("                <tr>\r\n                    <td>");
#nullable restore
#line 38 "C:\Users\Metin Yıldız\OneDrive - klu.edu.tr\Masaüstü\Mobil E Ticaret\MobilE-Ticaret\Views\Admin\Products.cshtml"
                   Write(item.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                    <td>");
#nullable restore
#line 39 "C:\Users\Metin Yıldız\OneDrive - klu.edu.tr\Masaüstü\Mobil E Ticaret\MobilE-Ticaret\Views\Admin\Products.cshtml"
                   Write(item.Category.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                    <td> <img");
            BeginWriteAttribute("src", " src=\"", 930, "\"", 950, 1);
#nullable restore
#line 40 "C:\Users\Metin Yıldız\OneDrive - klu.edu.tr\Masaüstü\Mobil E Ticaret\MobilE-Ticaret\Views\Admin\Products.cshtml"
WriteAttributeValue("", 936, item.ImageUrl, 936, 14, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" width=\"35\" height=\"35\" /> </td>\r\n                    <td><a");
            BeginWriteAttribute("href", " href=\"", 1011, "\"", 1047, 2);
            WriteAttributeValue("", 1018, "/admin/ProductDetail/", 1018, 21, true);
#nullable restore
#line 41 "C:\Users\Metin Yıldız\OneDrive - klu.edu.tr\Masaüstü\Mobil E Ticaret\MobilE-Ticaret\Views\Admin\Products.cshtml"
WriteAttributeValue("", 1039, item.Id, 1039, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"btn btn-success\">Detay</a></td>\r\n                    <td><a");
            BeginWriteAttribute("href", " href=\"", 1115, "\"", 1151, 2);
            WriteAttributeValue("", 1122, "/admin/UpdateProduct/", 1122, 21, true);
#nullable restore
#line 42 "C:\Users\Metin Yıldız\OneDrive - klu.edu.tr\Masaüstü\Mobil E Ticaret\MobilE-Ticaret\Views\Admin\Products.cshtml"
WriteAttributeValue("", 1143, item.Id, 1143, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"btn btn-info\">Güncelle</a></td>\r\n                    <td><a");
            BeginWriteAttribute("href", " href=\"", 1219, "\"", 1255, 2);
            WriteAttributeValue("", 1226, "/admin/DeleteProduct/", 1226, 21, true);
#nullable restore
#line 43 "C:\Users\Metin Yıldız\OneDrive - klu.edu.tr\Masaüstü\Mobil E Ticaret\MobilE-Ticaret\Views\Admin\Products.cshtml"
WriteAttributeValue("", 1247, item.Id, 1247, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" class=\"btn btn-danger\">Sil</a></td>\r\n                </tr>\r\n");
#nullable restore
#line 45 "C:\Users\Metin Yıldız\OneDrive - klu.edu.tr\Masaüstü\Mobil E Ticaret\MobilE-Ticaret\Views\Admin\Products.cshtml"
            }

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        </tbody>\r\n\r\n    </table>\r\n\r\n\r\n</div>\r\n\r\n");
        }
        #pragma warning restore 1998
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; } = default!;
        #nullable disable
        #nullable restore
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<Product>> Html { get; private set; } = default!;
        #nullable disable
    }
}
#pragma warning restore 1591
