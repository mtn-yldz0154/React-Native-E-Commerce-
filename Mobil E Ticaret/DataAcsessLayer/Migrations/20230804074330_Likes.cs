using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAcsessLayer.Migrations
{
    public partial class Likes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Favoris",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Favoris", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FavoriItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductId = table.Column<int>(type: "int", nullable: false),
                    FavoriId = table.Column<int>(type: "int", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FavoriItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FavoriItems_Favoris_FavoriId",
                        column: x => x.FavoriId,
                        principalTable: "Favoris",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FavoriItems_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FavoriItems_FavoriId",
                table: "FavoriItems",
                column: "FavoriId");

            migrationBuilder.CreateIndex(
                name: "IX_FavoriItems_ProductId",
                table: "FavoriItems",
                column: "ProductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FavoriItems");

            migrationBuilder.DropTable(
                name: "Favoris");
        }
    }
}
